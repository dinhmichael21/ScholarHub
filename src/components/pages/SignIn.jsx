import sickPc from "../sickPc.webp";

export default function SignIn() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', marginTop: "50px" }}>
            <h1 style={{ fontWeight: 'bold' }}>ERROR: PAGE OUT OF ORDER</h1>
            <img
                src={sickPc}
                alt="Logo"
                style={{ width: '40%', height: 'auto' }} // Adjust as needed
            />
        </div>
    );
}