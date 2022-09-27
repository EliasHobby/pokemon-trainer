export class StorageUtil {    
    public static sessionStorageWrite<T>(key: string, value: T):void
    {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    public static sessionStorageRead<T>(key: string): T | undefined
    {
        const storedValue = sessionStorage.getItem(key);
        try {
            if(storedValue){
                return JSON.parse(storedValue) as T;
            }
            return undefined;
        }
        catch(error)
        {
            sessionStorage.removeItem(key)
            return undefined;
        }
    }


    public static localStorageWrite<T>(key: string, value: T):void
    {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public static localStorageRead<T>(key: string): T | undefined
    {
        const storedValue = localStorage.getItem(key);
        try {
            if(storedValue){
                return JSON.parse(storedValue) as T;
            }
            return undefined;
        }
        catch(error)
        {
            localStorage.removeItem(key)
            return undefined;
        }
    }
}