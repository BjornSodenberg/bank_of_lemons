export const AdminInfo = () => {
    const adminName = "Огнев Ю."
    return (
        <div style={{
            backgroundColor: '#ffffff',
            borderRadius: 99,
            borderWidth: 2,
            borderColor: '#E1E1E1',
            display: 'flex',
        }}>
            <span style={{
                color: '#000000',
                padding: 16,
                fontSize: 16,
                fontWeight: 500
            }}>{adminName}</span>
        </div>
    )
}