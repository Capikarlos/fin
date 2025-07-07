const Profile = ({ user }) => {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Perfil</h1>
            <p><strong>Usuario:</strong> {user.username}</p>
            <p><strong>Bio:</strong> Aquí va una descripción del usuario.</p>
            <p><strong>Miembros desde:</strong> Julio 2025</p>
        </div>
    );
};

export default Profile;