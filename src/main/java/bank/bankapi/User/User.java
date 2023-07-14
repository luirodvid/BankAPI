package bank.bankapi.User;

import java.util.List;

import bank.bankapi.BankAccount.BankAccount;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "USERS")
public class User {
    @OneToMany(mappedBy = "owner")
    private List<BankAccount> accounts;
    @Id
    private Integer id;
    @NotNull(message = "Name cannot be null")
    private String firstName;
    @NotNull(message = "Name cannot be null")
    private String lastName;
    @Size(min = 4, max = 20, message = "Username must be between 4 and 20 characters")
    private String username;

    @Size(min = 4, max = 15, message = "Password must be between 4 and 15 characters")
    private String password;
    @Email
    private String email;
    @NotNull
    private String phoneNumber;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public User(Integer id, String firstName, String lastName, String username, String password, String email,
            String phoneNumber) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

}
