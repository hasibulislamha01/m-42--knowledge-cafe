import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='container mx-auto flex justify-between items-center my-5'>
            <h1 className='text-2xl lg:text-5xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;