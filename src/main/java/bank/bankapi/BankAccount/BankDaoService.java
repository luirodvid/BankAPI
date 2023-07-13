package bank.bankapi.BankAccount;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Component;

import bank.bankapi.User.User;

@Component
public class BankDaoService {
    private static List<BankAccount> accounts = new ArrayList<>();
    private static int accountsNumber = 0;

    public BankAccount save(BankAccount bankAccount, User user) {
        bankAccount.setId(++accountsNumber);
        bankAccount.setUser(user);
        accounts.add(bankAccount);
        return bankAccount;
    }

    public List<BankAccount> findAll() {
        return accounts;
    }

    public List<BankAccount> findFromUser(User user) {
        return accounts.stream().filter(a -> a.getUser() == user).toList();
    }

    public void deleteById(int id) {
        Predicate<? super BankAccount> predicate = account -> account.getId().equals(id);
        accounts.removeIf(predicate);
    }
}
