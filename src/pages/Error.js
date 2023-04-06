import NavigationBar from "../components/NavigationBar";

function ErrorPage() {
    return <>
        <NavigationBar />
        <main>
            <h1>An error occurred!</h1>
            <p>Could not find this page.</p>
        </main>
    </>
}

export default ErrorPage;