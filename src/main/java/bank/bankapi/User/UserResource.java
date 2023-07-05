package bank.bankapi.User;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserResource {

    private UserDaoService service;

    
    public UserResource(UserDaoService service) {
        this.service = service;
    }




    @GetMapping("/users")
    public List<User> retrieveAllUsers(){
        return service.findAll();
    }
    @GetMapping("/users/{id}")
    public User retrieveUserById(@PathVariable int id){
         User findOne = service.findOne(id);
         if(findOne==null){
            throw new UserNotFoundException("id:"+id);

         }      
         return findOne;
    }

    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user){
        User savedUser = service.save(user);
        return savedUser;
    }

    @PutMapping("/users/{id}")
    public User editUser(@Valid @RequestBody User user, @PathVariable int id){
        User savedUser = service.edit(user,id);
        return savedUser;
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable int id){
        service.deleteById(id);

    }
    
}
