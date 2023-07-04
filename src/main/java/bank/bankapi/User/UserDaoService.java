package bank.bankapi.User;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Component;

@Component
public class UserDaoService {
    private static List<User> users = new ArrayList<>();
    private static int usersCount = 0;
    static {
        users.add(new User(
                ++usersCount,
                "ElJuan",
                "Apellido",
                "eljuanillo_xd",
                "viva-espana",
                "tujuanillo@hotmail.com",
                "099-565-6969"));

    }

    public List<User> findAll() {
        return users;
    }

    public User save(User user) {
        user.setId(++usersCount);
        users.add(user);
        return user;
    }

    public User edit(User user, int id) {
        User found = findOne(id);
        found.setEmail(user.getEmail());
        return user;
    }

    public void deleteById(int id) {
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        users.removeIf(predicate);
    }

    public User findOne(int id) {
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        return users.stream().filter(predicate).findFirst().orElse(null);
    }

    //Login
    public User findEmail(String email) {
        Predicate<? super User> predicate = user -> user.getEmail().equals(email);
        return users.stream().filter(predicate).findFirst().orElse(null);
    }

    public boolean checkPassword(User user, String password){
        return user.getPassword().equals(password);
    }
}
