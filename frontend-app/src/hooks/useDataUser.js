import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getItemLocalStorage, setItemLocalStorage } from "../config/localStorageConfig"
import { fecthProfile, setProfileDataUser } from "../features/profile/services"
import { setDataShopeUser } from "../features/shope/services/slice/shopeSlice"
import { fecthShopeHeader } from "../features/shope/services"

const useDataUser = () => {
    let dispatch = useDispatch()

    // Data User
    const dataUser = useSelector((state) => state.profile.dataUser)
    const statusProfile = useSelector((state) => state.profile.status)
    useEffect(() => {
        const storedDataUser = getItemLocalStorage('dataUser');
        if (storedDataUser) {
            dispatch(setProfileDataUser(storedDataUser));
        } else {
            dispatch(fecthProfile());
        }
    }, [dispatch]);
    useEffect(() => {
        if (dataUser) {
            setItemLocalStorage('dataUser', dataUser);
        }
    }, [dataUser]);


    // Data Store
    const dataShope = useSelector((state) => state.shope.dataShope)
    const statusShope = useSelector((state) => state.shope.status)
    useEffect(() => {
        const storedDataShope = getItemLocalStorage('dataShope');
        if (storedDataShope) {
            dispatch(setDataShopeUser(storedDataShope));
        } else {
            dispatch(fecthShopeHeader());
        }
    }, [dispatch]);
    useEffect(() => {
        if (dataShope) {
            setItemLocalStorage('dataShope', dataShope);
        }
    }, [dataShope]);

    return {
        dataUser,
        dataShope,
        statusProfile,
        statusShope
    }
}

export default useDataUser