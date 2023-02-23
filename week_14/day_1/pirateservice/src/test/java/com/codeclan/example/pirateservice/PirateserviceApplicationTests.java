package com.codeclan.example.pirateservice;

import com.codeclan.example.pirateservice.models.Pirate;
import com.codeclan.example.pirateservice.repositories.PirateRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PirateserviceApplicationTests {

	@Autowired
	private PirateRepository pirateRepo;

	@Test
	void contextLoads() {
	}

	@Test
	public void canSaveAPirate() {
		Pirate myPirate = new Pirate("billy","bob",20);
		pirateRepo.save(myPirate);
	}

}
