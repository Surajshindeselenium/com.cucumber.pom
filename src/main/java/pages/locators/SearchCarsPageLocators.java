package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SearchCarsPageLocators {
	
	@FindBy(how=How.ID,using = "makes")
	public WebElement anyMakeDropdown;
	
	@FindBy(how=How.ID,using = "models")
	public WebElement modelsDropdown;
	
	@FindBy(how=How.ID,using = "locations")
	public WebElement locationsDropdown;
	
	@FindBy(how=How.ID,using = "priceTo")
	public WebElement priceToDropdown;
	
	@FindBy(how=How.ID,using = "search-submit")
	public WebElement findMyNextCarButton;

}
