const Home = ({ user, logout }) => {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Inicio</h1>
            {user ? (
                <>
                    <p>Bienvenido, <strong>{user.username}</strong></p>
                    <button onClick={logout}>Cerrar sesión</button>
                </>
            ) : (
                <p>Por favor, inicia sesión para comenzar.</p>
            )}
            <div style={{ marginTop: "2rem" }}>
                <p>Contenido público o timeline general aquí...</p>
            </div>
        </div>
    );
};

export default Home;