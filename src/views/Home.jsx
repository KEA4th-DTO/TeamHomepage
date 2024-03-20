import Skip from "../component/Skip";
import Header from "../component/Header";
import Main from "../component/Main";
import Intro from "../component/Intro";
import Logo from "../component/Logo";
import Slogan from "../component/Slogan";
import Team from "../component/Team";
import Members from "../component/Members";
import Footer from "../component/Footer";


export default function Home()
{
    //초승달
    //상현달
    // 상현망간의 달
    // 보름달
    // 하현망간의 달
    // 하현달 
    // 그믐달
    return(
    <>
        <Skip />
        <Header /> 
        <Main>
            <Intro />
            <Logo />
            <Slogan />
            <Team />
            <Members />
        </Main>
        <Footer />
    </>
    );
}