import Footer from "./Footer";

const ProfilePage = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-4">Welcome {user?.name}</h2>
      <div className="mb-4">
        <span className="text-gray-600">Email: </span>
        <span className="font-medium">{user?.email}</span>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfilePage;