package com.codeclan.example.WhiskyTracker;

import com.codeclan.example.WhiskyTracker.models.Distillery;
import com.codeclan.example.WhiskyTracker.models.Whisky;
import com.codeclan.example.WhiskyTracker.repositories.DistilleryRepository;
import com.codeclan.example.WhiskyTracker.repositories.WhiskyRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@ActiveProfiles("test") //Indicates it's a test profile so will not run DataLoader
@SpringBootTest
public class WhiskyTrackerApplicationTests {

	@Autowired
	WhiskyRepository whiskyRepository;
	@Autowired
	DistilleryRepository distilleryRepository;

	@Test
	public void contextLoads() {
	}


	@Test
	public void canFindWhiskyByYear() {
		List<Whisky> foundWhiskys = whiskyRepository.findByYear(2020);
		assertEquals(7,foundWhiskys.size());
	}

	@Test
	public void canFindWhiskyFromDistilleryWithCertainAge() {
		List<Whisky> foundWhiskey = whiskyRepository.findByAgeAndDistilleryName(15,"Glendronach");
		assertEquals(12,foundWhiskey.size());
	}

	@Test
	public void canFindWhyskeyFromRegion() {
		List<Whisky> whizkiz = whiskyRepository.findByDistilleryRegion("Lowland");
		assertEquals(65,whizkiz.size());
	}


	@Test
	public void canFindWhiskiesOlderThan12() {
		List<Distillery> distz = distilleryRepository.findByWhiskiesAge(12);
		assertEquals(133,distz.size());
	}


}
