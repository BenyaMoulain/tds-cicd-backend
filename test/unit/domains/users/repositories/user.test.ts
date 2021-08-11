import UserRepository from '../../../../../src/domains/users/repositories/user';

const mockCreate = jest.fn();
const mockFind = jest.fn();
const mockUpdate = jest.fn();
const mockRemove = jest.fn();

jest.mock(
  '../../../../../src/domains/users/repositories/schemas/user.ts',
  () => () => ({
    getModel: () => ({
      create: userSchema => mockCreate(userSchema),
      find: () => mockFind(),
      findByIdAndUpdate: (id, userSchema) => mockUpdate(id, userSchema),
      findByIdAndRemove: id => mockRemove(id),
    }),
  }),
);

describe('users repository tests', () => {
  const userRepository = new UserRepository();
  beforeEach(() => {
    mockCreate.mockClear();
    mockFind.mockClear();
    mockUpdate.mockClear();
    mockRemove.mockClear();
  });

  it('should call to schema model create method when repository save method is called', async () => {
    const expectedResponse = { saved: true };
    mockCreate.mockResolvedValue(expectedResponse);
    const userSchemaParam = { attr: 'value' };

    const result = await userRepository.save(userSchemaParam);

    expect(mockCreate).toHaveBeenCalledTimes(1);
    expect(mockCreate).toHaveBeenCalledWith(userSchemaParam);
    expect(result).toStrictEqual(expectedResponse);
  });
});
