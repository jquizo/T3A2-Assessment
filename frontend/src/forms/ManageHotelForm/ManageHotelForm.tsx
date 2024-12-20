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

  
    return (
        <FormProvider {...formMethods}>
            <form>
            <HotelDetailsSection />
            <GuestsSection />
            <ImagesSection />
            </form>
        </FormProvider>
        
    );
};

export default ManageHotelForm