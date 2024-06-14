

const Requirements = () => {
    return (
        <div className="">
            Requirements 
            <div className="border rounded-md p-4 group">
            <li className="group-hover:scale-105">Theme</li>
            <li>logo</li>
            <li>website name</li>
            <li>navbar</li>
            </div>
           
            <li>footer</li>
            <li>conditional</li>
            <li>slider</li>
            <li>map</li>
            <li>form and submit button with on submit event</li>
            <li>database</li>
            <li>pagination</li>
            <li>tan stack query</li>
            <li>Dashboard</li>
            <li>-User Dashboard</li>
            <li>-Member Dashboard</li>
            <li>-Admin Dashboard</li>
            <li>JWT</li>
            <li>Local Storage</li>
            <li>Payment</li>
            <li>Message</li>
            <li>Axios Interceptor</li>
            <li>Animation_ Framer Motion</li>        
            <a href="#" target="_blank">Assignment-11 requirements</a>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            Assignment_ID: assignment_category_0001         
        </h1>
        <p className="py-2 px-4">
            Video LINK: https://drive.google.com/file/d/1cfdnAl4VtXwcYkl1fJfEaXdoKm6woHeV/vie w?usp=sharing 
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            Online Group-Study assignment 
        </h1>
        <p className="py-2 px-4">
            In this assignment, you will build a web application for online group study with friends(Every registered user is a friend of others ).Users can create assignments, complete them, and grade their friends&apos; assignments.
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            Main requirements:        
        </h1>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            1. Authentication:         
        </h1>
        <p className="py-2 px-4">
●            Users are able to register an account by providing name, <mark>photoURL</mark>, email, and password using firebase . 
        </p>
        <p className="py-2 px-4">
●            Users are able to login using social login. Implement at least one social login(like google login, github sign up) . 
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            2. Assignment Management: [Here all the necessary routes will be private route ] 
        </h1>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            a. Assignment creation: 
        </h1>
        <p className="py-2 px-4">
        <li className="">
            Any logged in user is able to create an assignment for all users.
        </li>
        <li className="">
            An assignment will have:  
        </li>
        <li className="list-none pl-6">
            a title, description, marks, thumbnail Image URL, assignment difficulty level (easy, medium, hard) [YOU MAY USE <mark>DROPDOWN SELECT INPUT FIELD</mark>], and due date 
        </li>
        <li className="pl-12">
            [use this package for selecting date “https://www.npmjs.com/package/react-datepicker”]. 
        </li>
        <li className="">
            A success message will be shown when the assignment will be created successfully. [YOU MAY USE TOAST OF MODAL] 
        </li>           
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            b. Assignment deleting: 
        </h1>
        <p className="py-2 px-4">
        <li className="">
            Only the user is able to delete an assignment who has created the assignment. A user is not able to delete assignments which 
            are created by other users . 
        </li>
        <li className="pl-12">
            Hint: While a user will create an assignment you have to store the user email with the assignment data [followed by Assignment creation requirement]. And then while a user will be trying to delete an assignment you will
            compare the current user email with the assignment creator email. And if it matches then the assignment will be deleted.
        </li>
        <li className="">
            A successful message will be shown when the assignment will be deleted successfully .            ● 
        </li>
        <li className="">
            An error message will be shown when a user tries to delete an assignment which is not created by himself.
        </li>            
        </p> 
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            c. Assignment Updating: 
        </h1>
        <p className="py-2 px-4">
            Any user is able to update any assignment . 
        </p>
        <p className="py-2 px-4">
            [optional : it’s recommended to let the user update an assignment task who has created it. Follow hints of delete operation] 
        </p>
        <p className="py-2 px-4">
            ● While a user will try to update an assignment the input fields of updated assignment form will be filled automatically with previous assignment data [automatically filled is optional . But you should try it]. And users can change the input field data and can update with clicking on update assignment button. 
        </p>
        <p className="py-2 px-4">
            ● While the assignment is updated, show a success message and redirect the user to the all assignment page. [Redirecting is optional] 
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            3. Taking Assignment as an individual: 
        </h1>
        <p className="py-2 px-4">
            ● All users are able to visit the assignment page (without logged in) and are able to filter assignments based on assignment difficulty level . 
        </p>
        <p className="py-2 px-4">
            [Hint: While you are posting an assignment there is a difficulty level field . So make a similar input field here . While users will select any level from (easy, medium, hard) just find data from the database based on the difficulty level] 
        </p>
        <p className="py-2 px-4">
            ● Users will see a thumbnail, title, marks, assignment difficulty level and “View Assignment”and “Update Assignment” buttons for every assignment . It&apos;s up to you how you will display the cards of assignment . 
        </p>
        <p className="py-2 px-4">
            ● By clicking on the view assignment button the user will be navigated to the assignment details page (this page will be private) where the user will see the assignment details which are provided while the assignment was created. And the “Take assignment” button will be shown. 
        </p>
        <p className="py-2 px-4">
            ● Users are able to submit an assignment by clicking on the “Take assignment” button and it will open a modal [Or you may open a new page ,it&apos;s up to you] with the assignment submission form .
        </p>
        <p className="py-2 px-4">
            ● <mark>The assignment submission form will have input fields for PDF link submission</mark> and another text area for giving a quick note text. 
        </p>
        <p className="py-2 px-4">
            ● All users are able to visit the assignment page (without logged in) and are able to filter assignments based on assignment difficulty level . 
        </p>
        <p className="py-2 px-4">
            [Hint: While you are posting an assignment there is a difficulty level field . So make a similar input field here . While users will select any level from (easy, medium, hard) just find data from the database based on the difficulty level] 
        </p>
        <p className="py-2 px-4">
            ● Users will see a thumbnail, title, marks, assignment difficulty level and “View Assignment”and “Update Assignment” buttons for every assignment . It&apos;s up to you how you will display the cards of assignment . 
        </p>
        <p className="py-2 px-4">
            ● By clicking on the view assignment button the user will be navigated to the assignment details page (this page will be private) where the user will see the assignment details which are provided while the assignment was created. And the “Take assignment” button will be shown. 
        </p>
        <p className="py-2 px-4">
            ● Users are able to submit an assignment by clicking on the “Take assignment” button and it will open a modal [Or you may open a new page ,it&apos;s up to you] with the assignment submission form .
        </p>
        <p className="py-2 px-4">
            ● The assignment submission form will have input fields for PDF link submission and another text area for giving a quick note text. 
        </p>
        <p className="py-2 px-4">
            ● By default every submitted assignment will be in pending status . And save the user email with the submitted assignment so that it can be determined who has submitted it. 
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            4. Marking assignment: 
        </h1>
        <p className="py-2 px-4">
            ● The submitted assignment page will contain all submitted assignments by the users . 
        </p>
        <p className="py-2 px-4">
            ● Only pending assignments will be shown on the submitted assignments page. 
        </p>
        <p className="py-2 px-4">
            ● Every submitted assignment will have the assignment title, assignment marks, examinee name, and a “give mark” button. 
        </p>
        <p className="py-2 px-4">
            ● By clicking on the give mark button it will open a modal or will navigate to a new page. And a user will be able to see the google drive link(pdf file) , note submitted by examinee. There will be a marks input field and a feedback input field and a submit button for giving marks. 
        </p>
        <p className="py-2 px-4">
            ● User is able to give a mark after clicking on the submit button . ● After marking an assignment the status of the assignment will be changed to completed . 
        </p>
        <p className="py-2 px-4">
            Pages: ***All the pages mentioned below are must be created***(If you find any page are missing. Then you can add.) 
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            1. Home page(public page) - will have a navbar, footer, a banner section, a feature section, and a faq section. 
        </h1>
        <p className="py-2 px-4">
            a. Navbar - will have a logo, assignments, login, register link before logged in and will have logo, create assignments, assignments, my assignments, submitted assignments links, <mark>log out button with user image(while hover on the user image it will show the user name)</mark> b. Banner section - Design it based on the project theme 
        </p>
        <p className="py-2 px-4">
            c. Feature section - will have few cards of feature 
        </p>
        <p className="py-2 px-4">
            d. Faq - will have some frequently asked questions 
        </p>
        <p className="py-2 px-4">
            e. Footer - will have copyright, and relevant links 
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            2. Create assignment page(private page) 
        </h1>
        <p className="py-2 px-4">
        - will have functionality mentioned above . 
        </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            3. All Assignments page(public page)
        </h1>
            <p className="py-2 px-4">
            - will have all the assignments created by any user and it will have functionality mentioned above.  
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            4. My assignment page(private page) 
        </h1>
            <p className="py-2 px-4">
            - will have all assignments which are submitted by the specific user. For example, if you logged in you will only see your submitted assignment on the my assignment page
            </p>
            <p className="py-2 px-4">
                a. You can see assignment title, assignment status, assignment marks, your obtain marks, feedback (if you got the marks) 
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            5. Submitted assignment page(private page)  
        </h1>
            <p className="py-2 px-4">
            - will have all the pending assignments submitted by any user and have the functionality mentioned above.
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            6. Application will have a few more dynamic pages(private pages) 
        </h1>
            <p className="py-2 px-4">
            - like update assignment page, viewing a single assignment page. 
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            7. Application will have login, and registration page(both are public pages) 
        </h1>
            <p className="py-2 px-4">
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            Bonus Requirements: 
        </h1>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            1. Commits & readme: 
        </h1>
            <p className="py-2 px-4">
                ● Minimum 18 meaningful git commits on the client-side repository 
            </p>
            <p className="py-2 px-4">
                ● Minimum 8 meaningful commits on the server-side repository 
            </p>
            <p className="py-2 px-4">
                ● Create a readme for client-side and write about your project (at least 5 features with bullet points). 
            </p>
            <p className="py-2 px-4">
                **Remember to add your client-side live link of your website here** 
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
        2. Previewing docs or pdf: 
        </h1>
            <p className="py-2 px-4">
                ● In the submitted assignment page show preview for every submitted assignment resource preview(which pdf link was submitted while a user submitted an assignment) in the modal. 
            </p>
            <p className="py-2 px-4">
                Hints: Search in google <mark>“https://www.npmjs.com/package/react-pdf”.</mark> You will find some resources. Study and implement it. 
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            3. Pagination: Implement pagination on the all assignments page 4. Validation: 
        </h1>
            <p className="py-2 px-4">
                ● Add validation in the create assignment form. 
            </p>
            <p className="py-2 px-4">
                ● Add validation in the registration form. 
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            5. Make the website fully responsive for mobile, tablet & desktop view. 
        </h1>
        <p className="py-2 px-4">
                ---
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            6. Upon login, you will create a jwt token 
        </h1>
            <p className="py-2 px-4">
            and store it on the client-side and you will send the token with the call and verify the user. Implementing 401 and 403 is optional. Ensure you have implemented jwt token and create a token and store it on the client-side for both email/password-based authentication and social login. You must implement JWT on your private routes. 
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            Optional (But Highly Recommended): 
        </h1>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            Implement any two tasks from the following optional list:
        </h1>
            <p className="py-2 px-4">
                1. <mark>Add a spinner when the data is in a loading state.</mark> You can add a gif/jpg, use any package or customize it using CSS. 
            </p>
            <p className="py-2 px-4">
                2. Explore and implement any of the animations from the Framer Motion 3. Explore and implement Tanstack query mutations in your api. 
            </p>
            <p className="py-2 px-4">
                4. Add one extra feature of your own. This will help you in the future to differentiate your project from others. 
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            Additional information: 
        </h1>
            <p className="py-2 px-4">
                1. You can host images anywhere. 
            </p>
            <p className="py-2 px-4">
                2. You can use vanilla CSS or any library. 
            </p>
            <p className="py-2 px-4">
                3. Try to host your site on Firebase (Netlify hosting will need some extra configurations) 
            </p>
            <p className="py-2 px-4">
                4. Host your server-side application on Vercel. If needed, you can host somewhere else as well. 
            </p>
            <p className="py-2 px-4">
                5. Make Sure you deploy server-side and client-side on the first day. If you have any issues with hosting or GitHub push, please join the &quot;Github and deploy&ldquo; related support session. 
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            What to submit: 
        </h1>
            <p className="py-2 px-4">
                1. Your client-side code GitHub repository 
            </p>
            <p className="py-2 px-4">
                2. Your server-side code GitHub repository 
            </p>
            <p className="py-2 px-4">
                3. Your live website link 
            </p>
        <h1 className="font-bold bg-slate-300 rounded-md py-2 px-4">
            Some Guidelines: 
        </h1>
            <p className="py-2 px-4">
                1. Do not waste much time on the website idea. Just spend 15-20 minutes deciding, find a sample website, and start working on it. 
            </p>
            <p className="py-2 px-4">
                2. Do not waste much time finding the right image. You can always start with a simple idea. Make the website and then add different images. 
            </p>
            <p className="py-2 px-4">
                3. Don&apos;t look at the overall task list. Just take one task at a time and do it. Once it&apos;s done, pick the next task. If you get stuck on a particular task, move on to the next task. 
            </p>
            <p className="py-2 px-4">
                4. Stay calm, think before coding, and work sequentially. You will make it. 5. Be strategic about the electricity issue. 
            </p>
            <p className="py-2 px-4">
                6. use chat gpt to generate JSON data. You can use chatGPT for Other purposes as well.
            </p>       
        </div>
    );
};

export default Requirements;