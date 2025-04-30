import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex items-center space-x-1">
                <AppLogoIcon className="text-primary size-6 dark:text-white" />
                <span className="text-lg font-semibold">ToDoApp</span>
            </div>
        </>
    );
}
