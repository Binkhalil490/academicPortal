package com.sajjad.academicportalbackend.service.super_classes.auth;


import com.sajjad.academicportalbackend.dto.auth.LoginResponse;
import com.sajjad.academicportalbackend.model.auth.User;
import com.sajjad.academicportalbackend.service.super_classes.CrudService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
public interface UserService extends CrudService<User, Long>, UserDetailsService {

    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

    String getUserameByRandomStringAndPublicKeyAndHash(String randomStr, String publicKey, String hash);

    ResponseEntity<LoginResponse> getLoginResponse(User user);

    ResponseEntity<LoginResponse> refreshAuthTokens(String refreshToken);
}
