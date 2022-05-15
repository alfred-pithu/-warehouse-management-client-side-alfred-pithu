import React from 'react';

const Blog = () => {
    return (
        <div className='container my-5'>
            <div className='shadow p-3'>
                <p>1- When should you use nodejs and when should you use MongoDB ? <br /> <br />

                    As an asynchronous event-driven JavaScript runtime, Nodejs is designed to build scalable network applications. Nodejs is best when data is transferred in real-time. A real-time chatting application is a great example. Node.js is especially suited for applications where you'd like to maintain a persistent connection from the browser back to the server. Also, nodejs is great at handling long-poling. </p>
            </div>
            <br />
            <div className='shadow p-3'>
                <p>
                    2- When should you use nodejs and when should you use MongoDB ? <br /> <br />

                    As an asynchronous event-driven JavaScript runtime, Nodejs is designed to build scalable network applications. Nodejs is best when data is transferred in real-time. A real-time chatting application is a great example. Node.js is especially suited for applications where you'd like to maintain a persistent connection from the browser back to the server. Also, nodejs is great at handling long-poling.
                    MongoDB is a NoSQL database. Users can store structured and unstructured documents in this database. It uses a JSON-like format or B-JSON to store documents. Since it is a No SQL database, it is very helpful when working with a large amount of data. Instead of using tables and rows as in relational databases, the MongoDB architecture is made up of collections and documents and is easy to use as well.
                </p>
            </div>
            <br />
            <div className='shadow p-3'>
                <p>3- Differences between SQL and NoSQL databases.  <br /> <br />
                    SQL database has fixed schema whereas NoSQL database system has  dynamic schema.
                    SQL database is vertically scalable and Nosql database is horizontally scalable.
                    SQL database is well suited for complex queries, and NoSQL database is not that efficient for handling complex queries.

                    SQL database is good where consistency is critical,  data is conceptually modeled as tabular. NoSQL database is best when working with Graph or hierarchical data, data is large in amount and gets changed often.</p>
            </div>
            <br />
            <div className='shadow p-3'>
                <p>
                    4 -What is the purpose of JWT and how does it work?  <br /> <br />

                    JWT or JSON web token is used for securing web API's. It matches security information between the client-side and server-side. It is mainly used for authorization for accessing different functionalities of an application.

                    When a user logs in, a JWT is created for that user. Whenever the user wants to access a protected route/page the web token will be sent to the backend to check if the user has the permission to access that page or route.
                </p>
            </div>
        </div>
    );
};

export default Blog;