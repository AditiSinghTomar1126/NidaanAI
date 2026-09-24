# Nidaan AI

An AI/ML-powered healthcare prediction web application for early disease risk assessment.

## Overview

Nidaan AI is a web application that helps users assess their risk for several prevalent diseases using machine learning and deep learning models. The application provides an intuitive interface for users to input health data or upload medical images to obtain predictive insights about their health status. It addresses the need for accessible, preliminary health screening tools that can empower individuals to seek timely medical consultation.

Users can:
- Create an account and log in securely
- Input health parameters for heart disease and diabetes risk assessment
- Upload medical images (X-rays, mammograms) for lung cancer and breast cancer analysis
- View prediction results with clear interpretations
- Generate PDF reports of their predictions
- Navigate between different disease prediction modules

## Key Features

| Feature | Description |
|---------|-------------|
| **User Authentication** | Secure registration, login, logout, and session management with JWT tokens |
| **Heart Disease Prediction** | Analyzes 13 health parameters to predict heart disease risk |
| **Diabetes Prediction** | Evaluates 8 metabolic health indicators for diabetes risk assessment |
| **Lung Cancer Prediction** | Processes chest X-ray images to detect cancerous patterns |
| **Breast Cancer Prediction** | Analyzes mammogram images for breast cancer risk assessment |
| **PDF Report Generation** | Create downloadable reports of prediction results |
| **Responsive Design** | Mobile-friendly interface built with React and Tailwind CSS |
| **Secure Data Handling** | Environment-based configuration for sensitive credentials |

## Prediction Modules

### Heart Disease
The heart disease prediction module evaluates 13 clinical parameters including age, sex, chest pain type, resting blood pressure, cholesterol, fasting blood sugar, resting ECG results, maximum heart rate, exercise-induced angina, ST depression, slope of peak exercise ST segment, number of major vessels colored by fluoroscopy, and thalassemia. The model returns a binary prediction (0/1) indicating absence or presence of heart disease risk.

### Diabetes
This module assesses diabetes risk using 8 key health indicators: number of pregnancies, plasma glucose concentration, diastolic blood pressure, triceps skin fold thickness, 2-hour serum insulin, body mass index, diabetes pedigree function, and age. The prediction model outputs a binary result indicating diabetes risk status.

### Lung Cancer
Users can upload chest X-ray images for lung cancer analysis. The deep learning model processes the image to identify patterns indicative of cancerous tissues, providing a prediction of either "cancerous" or "non-cancerous" based on visual features in the radiograph.

### Breast Cancer
Similar to lung cancer assessment, this module accepts mammogram images for analysis. The model examines the uploaded image for characteristics associated with breast malignancy and returns a prediction result from the underlying classification model.

## How It Works

1. **User Authentication**: Users register with email/password or log in to access protected features
2. **Data Input**: Depending on the selected disease module, users either:
   - Input numerical health parameters (heart disease, diabetes)
   - Upload medical images in standard formats (lung cancer, breast cancer)
3. **Backend Processing**: 
   - Requests are sent to the Express.js API with JWT authentication
   - For parameter-based predictions: data is forwarded to Python scripts that load pre-trained ML models
   - For image-based predictions: images are temporarily stored and processed by Python/DL models
4. **Prediction Generation**: Models return binary classifications or descriptive results
5. **Result Presentation**: The backend sends formatted predictions back to the frontend for display
6. **Report Generation**: Users can optionally generate PDF reports summarizing their assessment

## Tech Stack

### Frontend
- **Framework**: React 18 with Vite bundler
- **Styling**: Tailwind CSS for responsive, utility-first design
- **State Management**: React Context API for user authentication state
- **HTTP Client**: Axios for API communication
- **Routing**: React Router v6 for client-side navigation
- **UI Components**: Custom components with Lucide icons and React Toastify for notifications
- **Image Handling**: React Leaflet for map features (if applicable)
- **PDF Generation**: pdf-lib library for creating reports

### Backend
- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB Atlas via Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT) with access/refresh token strategy
- **File Uploads**: Multer for handling medical image uploads
- **Security**: Bcryptjs for password hashing, CORS configuration, cookie parsing
- **Concurrent Processing**: Child processes for executing Python prediction scripts
- **Utilities**: Custom error handling (ApiError) and response formatting (ApiResponse)

### Machine Learning / Deep Learning
- **Language**: Python 3.x for all prediction models
- **Model Types**: 
  - Heart Disease: Custom script processing 13 input features
  - Diabetes: Standard classification model on 8 health metrics
  - Lung Cancer: Image classification model (likely CNN) on chest X-rays
  - Breast Cancer: Image classification model on mammograms
- **Execution**: Backend spawns Python processes with appropriate input parameters/files
- **File Storage**: Temporary uploads directory for processing medical images

### Other Libraries/Services
- **Dotenv**: Environment variable management
- **Nodemon & Concurrently**: Development tooling
- **Prettier**: Code formatting
- **Cors**: Cross-origin resource sharing configuration
- **Cookie-parser**: HTTP cookie parsing

## Project Structure

```
nidaan-ai/
├── Backend/
│   ├── controllers/          # Request handlers (prediction, user, pdf)
│   ├── db/                   # Database connection setup
│   ├── middlewares/          # Auth middleware (verifyJWT)
│   ├── models/               # Mongoose schemas (User model)
│   ├── routes/               # API route definitions
│   ├── uploads/              # Temporary storage for uploaded images
│   ├── utils/                # Utility classes (ApiError, ApiResponse, asyncHandler)
│   ├── .env                  # Environment variables (not committed)
│   ├── app.js                # Express app configuration
│   ├── index.js              # Server entry point
│   ├── package.json          # Backend dependencies and scripts
│   └── vercel.json           # Vercel deployment configuration
│
├── Frontend/
│   ├── src/
│   │   ├── assets/           # Static assets (images, icons)
│   │   ├── components/       # Reusable UI components (Navbar, Footer, Card, Hero)
│   │   ├── context/          # React Context (UserContext)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── pages/            # Page components (Home, Login, Signup, About, Predictors, Disease pages)
│   │   ├── App.jsx           # Main application component with routing
│   │   ├── index.css         # Global CSS styles
│   │   ├── main.jsx          # React entry point
│   │   ├── index.html        # HTML template
│   │   └── package.json      # Frontend dependencies and scripts
│
├── ML/                       # Python prediction scripts (organized by disease)
│   ├── Heart Disease Prediction/
│   ├── Diabetes Prediction/
│   ├── Lung Cancer Prediction/
│   └── Breast Cancer Prediction/
│
├── Medical Reports/          # Generated PDF reports storage
├── Screenshots/              # UI screenshots
├── LICENSE                   # MIT license
└── README.md                 # This file
```

## Installation & Setup

Follow these steps to run Nidaan AI locally:

### Prerequisites
- Node.js (v16+ recommended)
- Python 3.x (for prediction scripts)
- MongoDB Atlas account or local MongoDB instance
- Git

### 1. Clone Repository
```bash
git clone <repository-url>
cd nidaan-ai
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create .env file based on the example below (get values from your services)
# See Environment Variables section for required variables

# Start the development server
npm run server
# Or for concurrent frontend/backend development:
# npm run dev
```

### 3. Frontend Setup
```bash
# In a new terminal, navigate to frontend directory
cd ../Frontend

# Install dependencies
npm install

# Start the development server
npm run dev
# The frontend will be available at http://localhost:5173
```

### 4. Environment Variables
Create a `.env` file in the `Backend/` directory with these variables:
```
PORT=8080
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
ACCESS_TOKEN_SECRET=your_jwt_access_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_jwt_refresh_secret
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> **Note**: Never commit actual secrets to version control. The `.env` file should be listed in `.gitignore`.

## Usage

### 1. Authentication
- Visit `/signup` to create a new account with email and password
- Log in via `/login` to access prediction features
- Authenticated sessions are maintained via HTTP-only cookies and JWT tokens

### 2. Making Predictions
From the homepage (`/`), navigate to:
- **Heart Disease**: `/predictors/heart` → Input 13 health parameters → Submit
- **Diabetes**: `/predictors/diabetes` → Input 8 health metrics → Submit
- **Lung Cancer**: `/predictors/lung` → Upload chest X-ray image → Analyze
- **Breast Cancer**: `/predictors/breast` → Upload mammogram image → Analyze

### 3. Viewing Results
- Predictions display with clear textual interpretation
- For image-based predictions, results indicate presence/absence of detected patterns
- Numerical predictions show binary outcomes with explanatory messages

### 4. Generating Reports
- After receiving a prediction, use the "Generate Report" button (if implemented) to create a PDF summary
- Reports include user info, timestamp, prediction details, and disclaimer

### 5. Navigation
- Use the navbar to switch between prediction modules
- Visit `/about` for information about the application
- Access `/predictors` for an overview/dashboard of available tests

## Machine Learning Integration

Nidaan AI integrates machine learning models through a hybrid approach:
- **Backend**: Node.js/Express handles HTTP requests, authentication, and file management
- **Prediction Engine**: Python scripts execute the actual ML/DL models
- **Communication**: The backend spawns child processes to run Python scripts with appropriate inputs (parameters or file paths)
- **Output Handling**: Python script stdout/stderr is captured and formatted into JSON responses
- **Model Types**: 
  - Parameter-based models (heart disease, diabetes) process numerical inputs through classification algorithms
  - Image-based models (lung cancer, breast cancer) use convolutional neural networks to analyze medical imagery
- **Temporary Storage**: Uploaded images are stored temporarily in the `uploads/` directory and deleted after processing to maintain privacy

## Disclaimer

⚠️ **Important Medical Disclaimer**: Nidaan AI provides predictive insights for educational and informational purposes only. The predictions generated by this application are **not** medical diagnoses and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns. The application's predictions are based on statistical patterns in training data and may not account for individual medical history, symptoms, or other clinical factors. Use of this application does not establish a doctor-patient relationship.

## Future Improvements

Potential enhancements for future development (not currently implemented):
- Integration with electronic health record (EHR) systems
- Longitudinal risk tracking and history visualization
- Multi-language support
- Explainable AI features to show which factors contributed most to predictions
- Doctor portal for reviewing patient assessments
- Advanced model confidence scores and uncertainty estimation
- Additional disease prediction modules
- Offline mode capabilities for low-connectivity areas
- Mobile application (React Native) versions
- Cloud deployment automation (Docker, Kubernetes)
- Enhanced security auditing and penetration testing
- User feedback mechanism for model improvement
- Integration with telemedicine platforms

## Author

Aditi Singh Tomar  
Full-Stack Developer  

[GitHub](https://github.com/AditiSinghTomar1126) • [LinkedIn](https://linkedin.com/in/aditisinghtomar) • [Portfolio](https://aditisinghtomar-aditi-singh-tomar1126.vercel.app/)