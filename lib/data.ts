export const siteData = {
  "users": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@company.com",
      "department": "Engineering",
      "position": "Software Developer",
      "startDate": "2024-01-08",
      "manager": "Jane Smith",
      "onboardingProgress": 65
    }
  ],
  "tasks": [
    {
      "id": 1,
      "title": "Complete Profile Setup",
      "category": "profile",
      "priority": "high",
      "dueDate": "2024-01-10",
      "status": "completed",
      "estimatedTime": "15 min"
    },
    {
      "id": 2,
      "title": "Review Employee Handbook",
      "category": "documents",
      "priority": "high",
      "dueDate": "2024-01-12",
      "status": "in-progress",
      "estimatedTime": "60 min"
    },
    {
      "id": 3,
      "title": "Complete Safety Training",
      "category": "training",
      "priority": "high",
      "dueDate": "2024-01-15",
      "status": "completed",
      "estimatedTime": "45 min"
    }
  ],
  "documents": [
    {
      "id": 1,
      "title": "Employee Handbook",
      "type": "pdf",
      "category": "policy",
      "required": true,
      "version": "2024.1",
      "lastUpdated": "2024-01-01"
    },
    {
      "id": 2,
      "title": "Code of Conduct",
      "type": "pdf",
      "category": "policy",
      "required": true,
      "version": "2024.1",
      "lastUpdated": "2024-01-01"
    }
  ],
  "settings": {
    "theme": "light",
    "notifications": {
      "email": true,
      "push": false,
      "sms": false
    },
    "language": "en",
    "timezone": "America/New_York"
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "home"
    },
    {
      "label": "Profile Setup",
      "route": "/profile",
      "icon": "user"
    },
    {
      "label": "Documents",
      "route": "/documents",
      "icon": "document"
    },
    {
      "label": "Training",
      "route": "/training",
      "icon": "academic-cap"
    },
    {
      "label": "IT Setup",
      "route": "/it-setup",
      "icon": "cog"
    },
    {
      "label": "Help & Support",
      "route": "/help",
      "icon": "question-mark-circle"
    }
  ],
  "footer": [
    {
      "label": "Privacy Policy",
      "route": "/privacy"
    },
    {
      "label": "Terms of Service",
      "route": "/terms"
    },
    {
      "label": "Contact Support",
      "route": "/contact"
    }
  ]
};