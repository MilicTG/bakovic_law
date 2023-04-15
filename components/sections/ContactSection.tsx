"use client"

import {GoogleMap, MarkerF, useLoadScript} from '@react-google-maps/api';
import React, {useMemo} from "react";
import {SectionTitle} from "@/components";
import {PhoneIcon, EnvelopeIcon, BuildingOfficeIcon} from "@heroicons/react/24/outline";

function ContactSection() {

    const libraries = useMemo(() => ['places'], []);

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        libraries: libraries as any,
    });
    const mapCenter = useMemo(
        () => ({lat: 43.714937685876805, lng: 17.227616997894216}),
        []
    );

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: false,
            clickableIcons: true,
            scrollwheel: true,
        }),
        []
    );


    return (
        <section className="w-full py-10">
            <div className="container mx-auto px-4 flex flex-col justify-center items-center">
                <SectionTitle title="Kontaktirajte nas"/>

                <div className="w-full mt-20 flex flex-col xl:flex-row justify-around items-center">


                    <div className="w-full xl:w-fit flex flex-col">
                        <h5 className="text-2xl text-stone-700 font-bold mb-8">Kontakt info:</h5>

                        <div className="w-fit mb-8 flex flex-row items-center text-stone-700 text-sm xl:text-base font-bold">
                            <EnvelopeIcon className="w-7 text-primary-color mr-3"/>Adresa: <span
                            className="font-semibold text-sm xl:text-base px-2 text-primary-color">Stjepana Radića 5, Tomislavgrad</span>
                        </div>

                        <button
                            onClick={() => (window.location.href = "tel:+38763244470")}
                            className="w-fit my-2 text-sm xl:text-base flex flex-row items-center text-stone-700 hover:text-stone-500 text-md font-bold group transition ease-in-out duration-300"
                        >
                            <PhoneIcon
                                className="w-7 text-primary-color group-hover:text-stone-700 mr-3 transition ease-in-out duration-300"/>Telefon: <span
                            className="font-semibold text-sm xl:text-base px-2 text-primary-color group-hover:text-stone-700 transition ease-in-out duration-300">+387 63 244-470</span>
                        </button>

                        <button
                            onClick={() => (window.location.href = "mailto:ured@odvjetnik-bakovic.com")}
                            className="w-fit my-2 text-sm xl:text-base flex flex-row items-center text-stone-700 hover:text-stone-500 text-md font-bold group transition ease-in-out duration-300"
                        >
                            <EnvelopeIcon
                                className="w-7 text-primary-color group-hover:text-stone-700 mr-3 transition ease-in-out duration-300"/>E-Mail: <span
                            className="font-semibold text-sm xl:text-base px-2 text-primary-color group-hover:text-stone-700 transition ease-in-out duration-300">ured@odvjetnik-bakovic.com</span>
                        </button>


                        <h5 className="text-xl text-stone-700 font-semibold mt-8 mb-2">Radno vrijeme:</h5>
                        <ul className="flex flex-col w-fit">
                            <li className="flex flex-row items-center justify-between">
                                <p className="text-stone-800 font-semibold">
                                    Ponedjeljak:
                                </p>
                                <p className="text-stone-600 font-light text-lg ml-2">
                                    08:30 - 15:30
                                </p>
                            </li>
                            <li className="flex flex-row items-center justify-between">
                                <p className="text-stone-800 font-semibold">
                                    Utorak:
                                </p>
                                <p className="text-stone-600 font-light text-lg ml-2">
                                    08:30 - 15:30
                                </p>
                            </li>
                            <li className="flex flex-row items-center justify-between">
                                <p className="text-stone-800 font-semibold">
                                    Srijeda:
                                </p>
                                <p className="text-stone-600 font-light text-lg ml-2">
                                    08:30 - 15:30
                                </p>
                            </li>
                            <li className="flex flex-row items-center justify-between">
                                <p className="text-stone-800 font-semibold">
                                    Četvratk:
                                </p>
                                <p className="text-stone-600 font-light text-lg ml-2">
                                    08:30 - 15:30
                                </p>
                            </li>
                            <li className="flex flex-row items-center justify-between">
                                <p className="text-stone-800 font-semibold">
                                    Petak:
                                </p>
                                <p className="text-stone-600 font-light text-lg ml-2">
                                    08:30 - 15:30
                                </p>
                            </li>
                            <li className="flex flex-row items-center justify-between">
                                <p className="text-stone-800 font-semibold">
                                    Subota:
                                </p>
                                <p className="text-stone-600 font-light text-lg ml-2">
                                    09:00 - 12:00
                                </p>
                            </li>
                            <li className="flex flex-row items-center justify-between">
                                <p className="text-stone-800 font-semibold">
                                    Nedjelja:
                                </p>
                                <p className="text-stone-600 font-light text-lg ml-2">
                                    Zatvoreno
                                </p>
                            </li>
                        </ul>

                    </div>

                    <div className="p-4 mt-10 xl:mt-0 aspect-square w-full h-auto md:h-96 xl:w-[500px] xl:h-[500px] border border-stone-300">
                        {(!isLoaded) ?
                            <p>Učitavanje...</p>
                            :
                            <GoogleMap
                                options={mapOptions}
                                zoom={17}
                                center={mapCenter}
                                mapTypeId={google.maps.MapTypeId.ROADMAP}
                                mapContainerStyle={{width: '100%', height: '100%'}}
                            >
                                <MarkerF
                                    position={mapCenter}
                                />
                            </GoogleMap>
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection