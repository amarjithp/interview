# Simple Vite React App with Supabase

This is a guide to set up and run a simple React application built with **Vite** and integrated with **Supabase** for the backend.

---

## 📋 Prerequisites
Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (which includes npm) 

---

## 1. Clone the Repository
First, clone this repository to your local machine using git:

```bash
git clone https://github.com/amarjithp/interview.git
cd interview
```
## 2. Install Dependencies
Once you are in the project directory, install the necessary dependencies.
```bash
npm install
```
## 3. Set Up Supabase
This project requires a Supabase backend to function correctly.

### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign in or create a new account.  
2. Create a new project.  
3. Wait for your new project to be provisioned.  

---

### Create the Database Table
1. Once your project is ready, navigate to the **SQL Editor** from the left sidebar.  
2. Click on **+ New query**.  
3. Copy and paste the following SQL code into the editor:

```sql
CREATE TABLE public.interview (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    email TEXT NOT NULL
);
```
## 4. Configure Environment Variables
You need to connect your local application to your Supabase project.

### Create `.env.local` File
1. In the root of your project directory, create a new file named **`.env.local`**.  

---

### Get Supabase Credentials
1. Navigate to your Supabase project’s **Settings**.  
2. In the settings menu, click on **API**.  
   - The **Project URL** is your Supabase API URL.  
   - The **anon public key** is your Supabase anonymous key.  

---

### Add Keys to `.env.local`
Add these keys in the following format:

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_ANON_PUBLIC_KEY
```
## 5. Run the Application
You are now ready to run the application locally.

Using **npm**:

```bash
npm run dev


