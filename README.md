
1. Introduction

   
The purpose of this project was to build on the work done in Part 1 by adding logic, interactivity, and navigation to the mobile app using TypeScript and React Native (Expo).
The project demonstrates the ability to:
•	Use core components to create a user interface.
•	Use layouts and colour schemes to enhance usability.
•	Handle text inputs and button presses.
•	Store and display user data temporarily using TypeScript variables.
•	Use if statements and basic logic.
•	Navigate between multiple screens in the app.
•	Apply animations to improve user experience.
The app is designed for a chef to create and manage a restaurant menu.

3. App Overview

   
App Name: Chef’s Menu Manager
Development Environment: Expo (TypeScript template)
Tools Used:
•	VS Code
•	Expo CLI
•	React Navigation
•	React Native Picker
•	OBS (for screen recording)
The app consists of four screens:
1.	Home Screen – Displays all menu items and the total number of dishes.
2.	Add Menu Screen – Allows the chef to enter dish details (name, description, course, and price).
3.	Menu Details Screen – Displays detailed information about a selected dish.
4.	About Screen – Provides app and developer information.

3. Features Implemented

   
Feature	Description	Evidence / Code Reference
Text Inputs	Used to enter dish name, description, and price.	AddMenuScreen.tsx
Picker (Select Course)	Predefined list: Starters, Mains, Dessert.	AddMenuScreen.tsx
TypeScript Variables	Menu items stored in a useState<MenuItem[]> array.	HomeScreen.tsx
Button Presses	“Add Dish” navigates and saves input.	Button component in AddMenuScreen
Navigation	Stack navigation between all four screens.	App.tsx
Conditional Logic (if statements)	Validation to ensure all fields are filled before saving.	AddMenuScreen.tsx
Animations	Fade-in animation for menu items.	HomeScreen.tsx using Animated.View
Colour Scheme and Layout	Consistent theme with contrasting buttons.	Global styles
Responsive Layout	Uses ScrollView and View for flexible design.	All screens







5. Programming Concepts Demonstrated
   
a. Variables and State Management
Each menu item is stored using React’s useState hook:
const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
b. Input Handling
Form inputs update local state dynamically:
onChangeText={(text) => setDishName(text)}
c. Conditional Logic
Validates data before adding to list:
if (!name || !description || !price) {
  alert("Please fill in all fields");
  return;
}
d. Navigation

Screens are linked using React Navigation Stack:
navigation.navigate("AddMenu");
e. TypeScript Interfaces

Reusable type for all menu data:
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: Course;
  price: number;
}



 6. User Interface Design
    
•	Colours: Earth tones (green, brown, white) for a kitchen feel.
•	Typography: Clear, large text for readability.
•	Layout: Flexbox for consistent spacing.
•	Buttons: Rounded with shadows for modern look.
•	Animations: Subtle fade and scaling when adding dishes.

 8. App Navigation Flow
Home Screen
   ↓
Add Menu Screen → Save Item → Back to Home (Item Added)
   ↓
Menu Details Screen (on item press)
   ↓
About Screen

 9. Testing and Debugging
•	Testing environment: Expo Go (Android device).
•	Errors Fixed:
o	Import paths for screens corrected ('./screens/...').
o	Added missing dependencies (@react-navigation/native, @react-native-picker/picker).
o	Cleared cache using npx expo start -c to fix bundler issues.
•	Validation Testing:
o	Ensured blank fields trigger alerts.
o	Price input restricted to numbers only.
o	Menu items correctly appear on the Home Screen after saving.

10. Video Demonstration
A screen recording was created using OBS showing all app features:
•	App launch
•	Adding new menu items
•	Viewing item list and total count
•	Viewing details page
•	Navigating to About screen
Video uploaded to YouTube (Unlisted) for examiner access.
🔗 (Insert your YouTube link here)

 11. GitHub Repository

     
All project files are uploaded to GitHub.
🔗 (Insert your GitHub repo link here)

 11. Reflection

     
This project helped me gain hands-on experience with:
•	Structuring a React Native app in TypeScript.
•	Handling input validation and state updates.
•	Using navigation and UI layouts.
•	Debugging Expo environment issues.
•	Writing cleaner, modular code using separate files for screens and types.
In future work, I would improve by adding data persistence using AsyncStorage or a database.






13. Rubric Reference Summary
Rubric Criteria	Evidence	Marks
Core Components and Layouts	Implemented across 4 screens	✅
Colour Scheme and Images	Custom theme applied	✅
Text Inputs & Variables	Controlled components	✅
Button Presses	Adds menu item	✅
TypeScript Logic	Validation and storage	✅
Navigation	Multi-screen flow	✅
Animations	Added for item display	✅
User Experience	Responsive, readable UI	✅
Code Quality	Organized by screens & types	✅
Video & GitHub Submission	Included	✅

14. Conclusion
The Chef’s Menu Manager app successfully meets the requirements of POE Part 2: Adding the Logic.
It demonstrates the use of TypeScript, React Native components, and navigation to create an interactive, user-friendly mobile application

## Reference List (Harvard Style)


- Apple Human Interface Guidelines. (2025). Apple Developer. Available at: https://developer.apple.com/design/human-interface-guidelines/ (Accessed: 9 September 2025).
- Department of Higher Education and Training (DHET). (2020). National Skills Development Plan (NSDP) 2030. Pretoria: Government of South Africa.
- Empowering the Nation. (2025). About Us. Johannesburg: Empowering the Nation Training Centre.
- Garrett, J.J. (2011). The Elements of User Experience: User-Centered Design for the Web and Beyond. 2nd ed. Berkeley: New Riders.
- Google Material Design. (2025). Material Design Guidelines. Available at: https://m3.material.io/ (Accessed: 9 September 2025).
- Herrington, M., Kew, J. and Mwanga, A. (2022). Global Entrepreneurship Monitor: South Africa Report. Cape Town: University of Cape Town.
- International Labour Organization (ILO). (2019). Skills Development and Employment: A Global Perspective. Geneva: ILO.
- Krug, S. (2014). Don’t Make Me Think, Revisited: A Common Sense Approach to Web Usability. 3rd ed. San Francisco: New Riders.
- Mozilla Developer Network (MDN). (2025). HTML, CSS and JavaScript Documentation. Available at: https://developer.mozilla.org (Accessed: 9 September 2025).
- Nielsen, J. (1995). 10 Usability Heuristics for User Interface Design. Nielsen Norman Group. Available at: https://www.nngroup.com/articles/ten-usability-heuristics/ (Accessed: 9 September 2025).
- React Native. (2025). React Native Documentation. Available at: https://reactnative.dev/docs (Accessed: 9 September 2025).
- Shneiderman, B., Plaisant, C., Cohen, M., Jacobs, S., Elmqvist, N., & Diakopoulos, N. (2016). Designing the User Interface: Strategies for Effective Human-Computer Interaction. 6th ed. Boston: Pearson.
- Statistics South Africa (Stats SA). (2023). Quarterly Labour Force Survey. Pretoria: Stats SA. Available at: https://www.statssa.gov.za (Accessed: 9 September 2025).
- W3C. (2025). World Wide Web Consortium (W3C) Standards. Available at: https://www.w3.org/standards/ (Accessed: 9 September 2025).
- World Bank. (2020). The Future of Work in Africa: Harnessing the Potential of Digital Technologies for All. Washington DC: World Bank.

