import React from "react";

const study = () => {
    return (
        <>
            <section class="text-gray-400 bg-black body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <h1 className="text-6xl">
                        First Year
                    </h1>
                    <div class="container px-5 py-24 mx-auto">
                        <h2 className="text-5xl pb-16">
                            Semester 1
                        </h2>
                        <table class="w-full">
                            <tr class="">
                                <th class="text-xl">Subject</th>
                                <th class="text-xl" >Link 1</th>
                                <th class="text-xl">Link 2</th>
                            </tr>
                            <tr>
                                <td class="h-20 align-bottom text-center text-lg">PSUC</td>
                                <td class="h-20 align-bottom text-center text-lg">asda</td>
                                <td class="h-20 align-bottom text-center text-lg">asda</td>
                            </tr>
                            <tr>
                                <td class="h-20 align-bottom text-center text-lg">Chemistry</td>
                                <td class="h-20 align-bottom text-center text-lg">asda</td>
                                <td class="h-20 align-bottom text-center text-lg">asda</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default study;
