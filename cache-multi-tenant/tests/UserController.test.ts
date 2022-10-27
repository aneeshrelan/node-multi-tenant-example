import { getUsers } from "../src/helpers/users";
import Task from "../src/models/Task";
import User from "../src/models/User";

jest.mock("../src/context")
jest.mock('../src/models/User');
jest.mock('../src/models/Task');


describe("Validation scenarios", () => {
    afterEach(() => jest.clearAllMocks());

    it("FindAll Users", async () => {

        (<jest.Mock>User).mockReturnValue({ findAll: jest.fn() });
        (<jest.Mock>Task).mockReturnValue({ findAll: jest.fn() });
        await getUsers();

        expect(User().findAll).toHaveBeenCalledTimes(1);
        expect(User().findAll).toBeCalledWith({ "attributes": ["email"], "include": { "as": "taskData", "attributes": ["task"], "model": Task() } });

    });


});
