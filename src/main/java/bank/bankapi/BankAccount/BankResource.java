package bank.bankapi.BankAccount;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import bank.bankapi.User.User;
import bank.bankapi.User.UserDaoService;
import bank.bankapi.User.UserNotFoundException;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BankResource {
    
    private BankDaoService service;
    private UserDaoService userService;

    public BankResource(BankDaoService service, UserDaoService userService){
        this.service=service;
        this.userService= userService;
    }

    @GetMapping("/bankAccounts")
    public List<BankAccount> retrieveAllAccounts(){
        return service.findAll();
    }
    @GetMapping("/users/{userId}/bankAccounts")
    public List<BankAccount> retrieveUserById(@PathVariable int userId){
        User user = userService.findOne(userId);
         List<BankAccount> accounts = service.findFromUser(user);
         if(accounts==null){
            throw new UserNotFoundException("id:"+userId);
         }
         return accounts;
    }
    @PostMapping("/users/{userId}/bankAccounts")
    public BankAccount createAccount(@Valid @RequestBody BankAccount account,@PathVariable("userId") Integer userId){
        User user = userService.findOne(userId);
        BankAccount savedaccount = service.save(account,user);        
        return savedaccount;
    }
    @DeleteMapping("users/{userId}/bankAccounts/{id}")
    public void deleteUser(@PathVariable int id){
        service.deleteById(id);

    }
}
