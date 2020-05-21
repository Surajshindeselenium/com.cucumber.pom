package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.SearchCarsPageLocators;
import utility.SeleniumDriver;

public class SearchCarsPageActions {
	
	SearchCarsPageLocators searchCarsPageLocators = null;
	
	public void SearchCarsPageActions() {
		
		this.searchCarsPageLocators = new SearchCarsPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), searchCarsPageLocators);
		
	}
	
	public void selectCarMake(String carBrand) {
		
		Select selectCarMaker = new Select(searchCarsPageLocators.anyMakeDropdown);
		
		selectCarMaker.selectByVisibleText(carBrand);
		
	}
	
	public void selectCarModel(String carModel) {
		
		Select selectModel = new Select(searchCarsPageLocators.modelsDropdown);
		
		selectModel.selectByVisibleText(carModel);
		
	}
	
	public void selectLocation(String location) {
		
		Select selectCarLocation = new Select(searchCarsPageLocators.locationsDropdown);
		
		selectCarLocation.selectByVisibleText(location);
		
	}
	public void selectPrice(String price) {
		
		Select selectCarPrice = new Select(searchCarsPageLocators.priceToDropdown);
		
		selectCarPrice.selectByVisibleText(price);
		
	}
	
	public void clickOnFindMyNextCar() {
		
		searchCarsPageLocators.findMyNextCarButton.click();
		
	}
	

}