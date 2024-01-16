# Bosta Front End Engineer Assessment - Mohamed Raafat

**Hosting Link:** https://bostaassessment.web.app/

To run code:
- npm install
- npm run start
### Below is a list of the work I've produced:
- Created a React App similar to the UI provided in the email.
- Built responsive UI using **MUI** that is suitable for desktop and mobile.
- Used **Git** version control system.
- Maintained a clean project structure.
- Used **Cairo** font.
- Used **Redux/ReduxToolkit** for state management.
- Localized the app UI using **i18n-Next**.
- Used **Fetch API** to send a get request to the provided endpoint to get shipment details.
- Used **Postman** to understand the API response and the values it returns.
- Handled the exceptions resulting from the responses.
- Processed the provided timestamp to create the different date/time formats provided in the UI.
- Mapped the English values in the API response to Arabic to ensure proper localization.
- Changed the colors of the UI dynamically depending on the API response.
- Deployed the app on **Firebase**.

### Limitations:
- The API endpoint doesn't return the shipping address, which makes sense, as this is a public endpoint, and you wouldn't want to expose the customer's personal details. I have hard-coded the address.

- Due to the lack of access to the API endpoint documentation, I couldn't get all the exact values for the "Hubs", "Shipment Statuses", and other properties for proper translation, so for unknown values, I defaulted to the English translation provided by the API.

### Areas of Improvement
-  **Use Ant Design**: I realized you used Ant Design for the website's UI midway through the assessment. If I had noticed earlier I would have used it instead of MUI to match your design language more.

-  **Use an AI Translator**: The localization of static UI elements was easy, but the API responses were harder. Instead of the currently used manual mapping, I would have used an AI tool to translate the API responses.

### Assumptions
- **The Icons and Images**: I couldn't extract these from the provided images, so I used **Material Icons**
