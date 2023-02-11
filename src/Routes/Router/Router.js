import { createBrowserRouter } from "react-router-dom";
import AddSocialMedia from "../../components/AddSocialMedia/AddSocialMedia";
import ApprovedOrRejectProfile from "../../components/ApprovedOrRejectProfile/ApprovedOrRejectProfile";
import Contacts from "../../components/Contacts/Contacts";
import EmailValidation from "../../components/EmailValidation/EmailValidation";
import EventReports from "../../components/EventReports/EventReports";
import Home from "../../components/Home/Home";
import Lists from "../../components/Lists/Lists";
import PaymentRequest from "../../components/PaymentRequest/PaymentRequest";
import ProfileInformation from "../../components/ProfileInformation/ProfileInformation";
import PublishPosts from "../../components/PublishPosts/PublishPosts";
import SchedulePosts from "../../components/SchedulePosts/SchedulePosts";
import Sequence from "../../components/Sequence/Sequence";
import UploadQueue from "../../components/UploadQueue/UploadQueue";
import UserAffiliateDashboard from "../../components/UserAffiliateDashboard/UserAffiliateDashboard";
import UserInformation from "../../components/UserInformation/UserInformation";
import UTMDetails from "../../components/UTMDetails/UTMDetails";
import UTMManagement from "../../components/UTMManagement/UTMManagement";
import Main from "../../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/utmdetails',
                element: <UTMDetails></UTMDetails>
            },
            {
                path: '/eventreports',
                element: <EventReports></EventReports>
            },
            {
                path: '/lists',
                element: <Lists></Lists>
            },
            {
                path: '/contacts',
                element: <Contacts></Contacts>
            },
            {
                path: '/uploadqueue',
                element: <UploadQueue></UploadQueue>
            },
            {
                path: '/sequence',
                element: <Sequence></Sequence>
            },
            {
                path: '/emailvalidation',
                element: <EmailValidation></EmailValidation>
            },
            {
                path: '/addsocialmedia',
                element: <AddSocialMedia></AddSocialMedia>
            },
            {
                path: '/scheduleposts',
                element: <SchedulePosts></SchedulePosts>
            },
            {
                path: '/publishposts',
                element: <PublishPosts></PublishPosts>
            },
            {
                path: '/userinformation',
                element: <UserInformation></UserInformation>
            },
            {
                path: '/useraffiliatedashboard',
                element: <UserAffiliateDashboard></UserAffiliateDashboard>
            },
            {
                path: '/paymentrequest',
                element: <PaymentRequest></PaymentRequest>
            },
            {
                path: '/approvedorrejectprofile',
                element: <ApprovedOrRejectProfile></ApprovedOrRejectProfile>
            },
            {
                path: '/profileinformation',
                element: <ProfileInformation></ProfileInformation>
            },
            {
                path: '/utmmanagement',
                element: <UTMManagement></UTMManagement>
            }
        ]
    }
])