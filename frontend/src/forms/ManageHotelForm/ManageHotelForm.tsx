import { FormProvider, useForm } from "react-hook-form";
import HotelDetailsSection from "./DetailsSection";
import GuestsSection from "./GuestsSection";
import ImagesSection from "./ImagesSection";

export type HotelFormData = {
    name: string;
    city: string;
    country: string;
    description: string;
    type: string;
    pricePerNight: number;
    imageFiles: FileList;
    imageUrls: string[];
    adultCount: number;
    childCount: number; 
};

const ManageHotelForm = () => {
    const formMethods = useForm<HotelFormData>();
    const { handleSubmit } = formMethods;

    const onSubmit = handleSubmit((formData: HotelFormData) => {

        
    })
  
    return (
        <FormProvider {...formMethods}>
            <form onSubmit={onSubmit}>
            <HotelDetailsSection />
            <GuestsSection />
            <ImagesSection />
            {/* Submit Button  */}
            <span className="flex justify-end">
            <button
            type="submit"
            className="bg-slate-700 text-white p-2 rounded-md font-bold hover:bg-blue-500 text-xl disabled:bg-gray-500"
            >
            Save Hotel
            </button>
            </span>
            </form>
        </FormProvider>
        
    );
};

export default ManageHotelForm