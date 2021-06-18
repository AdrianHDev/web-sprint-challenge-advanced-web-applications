import axiosWithAuth from "../helpers/axiosWithAuth"

export const editColorService = async (color) => {
    try {
        const res = await axiosWithAuth().put(`http://localhost:5000/api/colors/${color.id}`, color)
        return res.data
    } catch (err) {
        console.error(err);
    }
}

export const deleteColorService = async (id) => {
    try {
        const res = await axiosWithAuth().delete(`http://localhost:5000/api/colors/${id}`)
        return Number(res.data);
    } catch (err) {
        console.error(err);
    }
}