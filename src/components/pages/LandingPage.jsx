import calendar from "../mjlspCalendar.png";

export default function LandingPage() {
    return (
        <div>
            <img
                src={calendar}
                alt="Logo"
                style={{ width: '100%', height: '90vh' }} // Adjust as needed
            />
        </div>
    );
}