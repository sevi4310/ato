package ATO;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class MessageController {


	public MessageController() {
	}

	@GetMapping("/xmessages")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public @ResponseBody Message  getMessagesByVar() {
		List list = new ArrayList();
		Message  msg = new Message("Hello");
		list.add(msg);
		
		return msg;
	}

	@PutMapping("/mp/{query}/{myText}")
//	@CrossOrigin(origins = "http://localhost:4200, http://localhost:8082")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public @ResponseBody Message getPalindromes(@PathVariable("query") String query, @PathVariable("myText") String myText) {
		Set<String> set = findAllPalindromesUsingBruteForceApproach(myText);
		int count = set.size();
		String sCount = "Size: " +  count;
		String joined = String.join(",", set);
		joined = sCount +  " " + joined;
		Message  msg = new Message(joined);
		return msg;
	}

	
	public Set<String> findAllPalindromesUsingBruteForceApproach(String input) {
	    Set<String> palindromes = new HashSet<>();
	    for (int i = 0; i < input.length(); i++) {
	        for (int j = i + 1; j <= input.length(); j++) {
	            if (isPalindrome(input.substring(i, j))) {
	                palindromes.add(input.substring(i, j));
	            }
	        }
	    }
	    return palindromes;
	}
	
	private boolean isPalindrome(String input) {
	    StringBuilder plain = new StringBuilder(input);
	    StringBuilder reverse = plain.reverse();
	    return (reverse.toString()).equals(input);
	}
}
