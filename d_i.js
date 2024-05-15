// class UserRepository {
//   getUserById(id) {
//     // Simulate fetching user from a database
//     return { id, name: "John Doe" };
//   }
// }

// class UserService {
//   constructor() {
//     this.userRepository = new UserRepository();
//   }

//   getUser(id) {
//     return this.userRepository.getUserById(id);
//   }
// }

// const userService = new UserService();
// console.log(userService.getUser(1)); // Output: { id: 1, name: 'John Doe' }

////right way to dj
class UserRepository {
  getUserById(id) {
    // Simulate fetching user from a database
    return { id, name: "John Doe" };
  }
}
class User1Repository {
  getUserById(id) {
    // Simulate fetching user from a database
    return { id, name: "Lee Y" };
  }
}

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getUser(id) {
    return this.userRepository.getUserById(id);
  }
}

// Create an instance of UserRepository
const userRepository = new UserRepository();
const userRepository1 = new User1Repository();

// Inject UserRepository into UserService
const userService = new UserService(userRepository1);

console.log(userService.getUser(1)); // Output: { id: 1, name: 'John Doe' }
//  we put it throuw constructor
//  ech time we can change the object that we send .
