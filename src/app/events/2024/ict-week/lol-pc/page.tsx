"use client";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import { Inter } from "next/font/google";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Autoplay from "embla-carousel-autoplay";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";

const formScema = z.object({
  name: z.string(),
  emailAddress: z.string().email(),
  message: z.string(),
});

const inter = Inter({ subsets: ["latin"] });

const images = [
  "/alpha/assets/lolpcForm_img/mechanics1.png",
  "/alpha/assets/lolpcForm_img/mechanics2.png",
  "/alpha/assets/lolpcForm_img/mechanics3.png",
  "/alpha/assets/lolpcForm_img/mechanics4.png",
  "/alpha/assets/lolpcForm_img/mechanics5.png",
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [formData, setFormData] = useState({
    teamName: "",
    participants: "",
    sections: "",
    repEmail: "",
    discord: "",
    lolIGN: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { teamName, participants, discord, sections, repEmail, lolIGN } =
      formData;
    if (
      !teamName ||
      !participants ||
      !discord ||
      !repEmail ||
      !sections ||
      !lolIGN
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:3000/events/2024/ict-week/lol-pc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        toast("Form has been submitted, See you at the tournament!", {
          style: {
            background: "rgb(30 41 59)",
            color: "white",
            fontSize: "0.75rem",
          },
        });
        console.log("Form Submitted");
        handleClose();
      } else {
        throw new Error("Failed to add form");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  const handleClose = () => {
    setFormData({
      teamName: "",
      participants: "",
      discord: "",
      sections: "",
      repEmail: "",
      lolIGN: "",
    });
  };

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <body
      style={{
        backgroundImage: `linear-gradient(to right, rgba(1, 1, 1, 1.6), rgba(150, 150, 150, 0.0), rgba(1, 1, 1, 1.6)), url(${"/alpha/assets/lolpcForm_img/yasbg.gif"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex justify-center translate-y-[-0%] p-0">
        <Image
          src="/alpha/assets/lolpcForm_img/lollogo.png"
          width={1700}
          height={100}
          alt="lol_logo"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="shadow-2xl flex justify-center pt-0 pb-0 px-0">
        <Card className="flex-col justify-center max-w-7xl w-full max-h-screenshadow-2xl border rounded-true bg-yellow-10 border-none text-yellow-400 ">
          <img
            src="https://readme-typing-svg.demolab.com?font=serif&size=170&duration=3700&pause=1000&color=D4C108&center=true&vCenter=true&random=false&width=1930&height=200&lines=%F0%9D%90%80%F0%9D%90%9B%F0%9D%90%A8%F0%9D%90%AE%F0%9D%90%AD;%F0%9D%90%8B%F0%9D%90%9E%F0%9D%90%9A%F0%9D%90%A0%F0%9D%90%AE%F0%9D%90%9E+%F0%9D%90%A8%F0%9D%90%9F+%F0%9D%90%8B%F0%9D%90%9E%F0%9D%90%A0%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%9D%F0%9D%90%AC"
            alt="Typing SVG"
          />

          <br />
          <br />
          <br />
          <br />

          <CardContent className=" shadow-2xl font-semibold text-center text-lg sm:text-1x2 md:text-1x2 lg:text-1x2 xl:text-1x2">
            <div>
              <p className="text-sm md:text-xl lg:text-4x1 font-extrabold shadow-inner">
                League of Legends (LoL) is a multiplayer online battle arena
                (MOBA) game developed by Riot Games in 2009. This PC-only game
                is free to play and boasts more than 150 million players. It is
                one of the world’s most popular esports, with several
                professional and amateur leagues competing worldwide. League of
                Legends is rated T for Teen.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img
              src="https://readme-typing-svg.demolab.com?font=serif&size=200&duration=3500&pause=1000&color=D4C108&center=true&vCenter=true&random=false&width=1930&height=200&lines=%F0%9D%90%8C%F0%9D%90%9E%F0%9D%90%9C%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%A7%F0%9D%90%A2%F0%9D%90%9C%F0%9D%90%AC;%F0%9D%90%91%F0%9D%90%AE%F0%9D%90%A5%F0%9D%90%9E%F0%9D%90%AC+"
              alt="Typing SVG"
            />
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p className="font-inter text-2x1 sm:text-1x2 md:text-3xl lg:text-1x1 relative text-justify m-0">
                𝟏. 𝐁𝐞𝐡𝐚𝐯𝐢𝐨𝐫𝐬:
                <br />
                <br />
                <br />
                <br />
              </p>
              <p className="text-sm md:text-xl text-justify lg:text-4x1 font-extrabold shadow-inner">
                League of Legends (LoL) is a multiplayer online battle arena
                (MOBA) game developed by Riot Games in 2009. This PC-only game
                is free to play and boasts more than 150 million players. It is
                one of the world’s most popular esports, with several
                professional and amateur leagues competing worldwide. League of
                Legends is rated T for Teen.
                <br />
                <br />
                <br />
                <br />
              </p>
              <p className="font-inter text-2x1 sm:text-1x2 md:text-3xl lg:text-1x1 relative text-justify m-0">
                𝟐. 𝐏𝐚𝐮𝐬𝐞𝐬 𝐚𝐧𝐝 𝐁𝐮𝐠𝐬:
                <br />
                <br />
                <br />
              </p>
              <p className="text-sm md:text-xl text-justify lg:text-4x1 font-extrabold shadow-inner">
                ● Directed Pause: Officials may pause at any given situation or
                time.
                <br />
                <br />
                ●Player Pause: Players may only pause a match immediately when
                they encounter any given situations below, but must signal an
                official before doing so(in chat or simply signaling
                physically); acceptable reasons may include:
                <br />
                <br />
                <br />○ Unintentional Disconnection (Internet problem, client
                disconnection, platform or network issues)
                <br />○ Hardware or software malfunction (bugs)
                <br />○ Physical interference (broken mouse, keyboard, chair,
                etc.)
                <br />
                <br />
                <br />
                Intentionally pausing the game without signaling will give them
                a warning; three warnings will disqualify their team.
                <br />
                <br />
                <br />
              </p>
              <p className="font-inter text-2x1 sm:text-1x2 md:text-3xl lg:text-1x1 relative text-justify m-0">
                𝟑. 𝐃𝐞𝐯𝐢𝐜𝐞𝐬 𝐚𝐧𝐝 𝐈𝐭𝐞𝐦𝐬:
                <br />
                <br />
                <br />
              </p>
              <p className="text-sm md:text-xl text-justify lg:text-4x1 font-extrabold shadow-inner">
                Players can bring their own mouse, keypad, earphones/headphones
                and keyboards.
                <br />
                <br />
                <br />
                <br />
              </p>
              <p className="font-inter text-2x1 sm:text-1x2 md:text-3xl lg:text-1x1 relative text-justify m-0">
                𝟒. 𝐎𝐧-𝐓𝐢𝐦𝐞:
                <br />
                <br />
                <br />
              </p>
              <p className="text-sm md:text-xl text-justify lg:text-4x1 font-extrabold shadow-inner">
                Contestants have a maximum of 15 minutes before they are
                disqualified.
                <br />
                <br />
                <br />
                <br />
              </p>
              <p className="font-inter text-2x1 sm:text-1x2 md:text-3xl lg:text-1x1 relative text-justify m-0">
                𝟓. 𝐍𝐞𝐭𝐰𝐨𝐫𝐤 𝐓𝐞𝐬𝐭𝐢𝐧𝐠:
                <br />
                <br />
                <br />
              </p>
              <p className="text-sm md:text-xl text-justify lg:text-4x1 font-extrabold shadow-inner">
                Both teams are required to have a 5-minute quick match to check
                their pings, if there are any technical issues it will be
                discussed between the committee and both teams.
                <br />
                <br />
                <br />
                <br />
              </p>
              <p className="font-inter text-2x1 sm:text-1x2 md:text-3xl lg:text-1x1 relative text-justify m-0">
                𝟔. 𝐓𝐞𝐚𝐦 𝐂𝐚𝐩𝐭𝐚𝐢𝐧𝐬:
                <br />
                <br />
                <br />
              </p>
              <p className="text-sm md:text-xl text-justify lg:text-4x1 font-extrabold shadow-inner">
                Every team is required to have one team captain/leader.
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </CardContent>
          <br />
          <br />
          <br />
          <br />
          <div className="drop-shadow-md flex justify-evenly items-center pb-7 flex-col sm:flex-row gap-4">
            <div>
              <Dialog>
                <div className="animate-pulse space-x-4 font-extrabold flex flex-col items-center justify-center sm:flex-row sm:items-center">
                  <DialogTrigger asChild>
                    <button className="font-serif flex justify-between bg-yellow-500 px-20 py-5 rounded-full text-black tracking-wider shadow-x2 hover:bg-white hover:scale-105 duration-500 hover:ring-20 hover:text-black">
                      MECHANICS
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        />
                      </svg>
                    </button>
                  </DialogTrigger>
                </div>
                <div className="px-5">
                  <DialogContent className="bg-transparent lg:scale-[2.6] md:scale-[1.7] sm:scale-[1.5] ">
                    <div className="flex justify-center mt-4">
                      <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                          {images.map((image, index) => (
                            <CarouselItem key={index} className="">
                              <div className="">
                                <Card className="">
                                  <div className="h-full flex items-center justify-center">
                                    <CardContent className="h-full flex items-center justify-center">
                                      <img
                                        className=""
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                      />
                                    </CardContent>
                                  </div>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>
                  </DialogContent>
                </div>
                <DialogFooter></DialogFooter>
              </Dialog>
            </div>

            <div>
              <Dialog>
                <div className="animate-pulse space-x-4 font-extrabold flex flex-col items-center justify-center sm:flex-row sm:items-center">
                  <DialogTrigger asChild>
                    <button className="font-serif flex justify-between bg-yellow-500 px-20 py-5 rounded-full text-black tracking-wider shadow-x2 hover:bg-white hover:scale-105 duration-500 hover:ring-20 hover:text-black">
                      REGISTRATION
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        />
                      </svg>
                    </button>
                  </DialogTrigger>
                </div>

                <div>
                  <DialogContent className="lg:w-[50rem] lg:max-w-[120rem] md:max-w-[40rem] px-12 py-3 bg-swhitebefore:blur-lg scale- max-h-[100vh] overflow-y-auto">
                    <form onSubmit={handleSubmit}>
                      <DialogHeader>
                        <DialogTitle className="shadow-inline flex justify-center text-3xl">
                          Registration Form
                        </DialogTitle>
                        <DialogDescription></DialogDescription>
                      </DialogHeader>

                      {/* Team Name */}
                      <div className="mt-5">
                        <div className="grid grid-cols-4 items-center gap-4 ">
                          <Label htmlFor="teamName" className="text-right">
                            Team Name
                          </Label>
                          <Input
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                teamName: e.target.value,
                              })
                            }
                            value={formData.teamName}
                            id="teamName"
                            placeholder="Diwata Pares Overload"
                            className="col-span-2"
                            required
                          />
                        </div>

                        {/* Team Details*/}
                        <div className="grid grid-cols-1 items-center gap-4 pt-3">
                          <div>
                            <Label
                              htmlFor="participants"
                              className="lg:text-right"
                            >
                              Participants (Team Leader, Participant 2,
                              Participant 3, Participant 4, Participant 5,
                              Participant 6)
                            </Label>
                            <Input
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  participants: e.target.value,
                                })
                              }
                              value={formData.participants}
                              id="participants"
                              placeholder="Sam Angela, Daddy Tyga, Pao LUL"
                              className="col-span-3"
                              name="members"
                              required
                            />
                          </div>
                        </div>

                        {/* Year and Section */}
                        <div className="grid grid-rows-1 items-center pt-3">
                          <div>
                            <Label htmlFor="sections" className="text-right">
                              Year and Section (Surname_YR_Section)
                            </Label>
                            <Input
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  sections: e.target.value,
                                })
                              }
                              value={formData.sections}
                              id="sections"
                              placeholder="Angela_1st_BSCS, Tyga_2nd_BSCS, LUL _3rd_BSIT"
                              className="col-span-2"
                              required
                            />
                          </div>
                        </div>

                        {/* Representatives STI Email Address */}
                        <div className="grid grid-rows-1 items-center pt-3">
                          <Label
                            htmlFor="repEmail"
                            className="lg:text-justify font-medium"
                          >
                            STI Email Address (Team Leader, Participant 2,
                            Participant 3, Participant 4, Participant 5,
                            Participant 6)
                          </Label>
                          <Input
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                repEmail: e.target.value,
                              })
                            }
                            value={formData.repEmail}
                            id="repEmail"
                            type="email"
                            placeholder="cutieako.234648@ortigas-cainta.sti.edu.ph, skibidi.234648@ortigas-cainta.sti.edu.ph"
                            className="col-span-3"
                            required
                          />
                        </div>

                        {/* Discord Accounts*/}
                        <div className="grid grid-rows-1 items-center pt-3">
                          <div>
                            <Label htmlFor="discord" className="text-right">
                              Discord Account (Team Leader, Participant 2,
                              Participant 3, Participant 4, Participant 5,
                              Participant 6)
                            </Label>
                            <Input
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  discord: e.target.value,
                                })
                              }
                              value={formData.discord}
                              id="discord"
                              type="text"
                              placeholder="gyatt6969, gothgirl0000, wasian1432"
                              className="col-span-3"
                              required
                            />
                          </div>
                        </div>

                        {/* League Of Legends IGNs*/}
                        <div className="grid grid-rows-1 items-center pt-3">
                          <div>
                            <Label htmlFor="lolIGN" className="text-right">
                              LoL IGNs (Team Leader, Participant 2, Participant
                              3, Participant 4, Participant 5, Participant 6)
                            </Label>
                            <Input
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  lolIGN: e.target.value,
                                })
                              }
                              value={formData.lolIGN}
                              id="lolIGN"
                              type="text"
                              placeholder="yasuo#6969, thicc#0000, mommy#1432"
                              className="col-span-3"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mt-3">
                        <Checkbox
                          id="terms"
                          className="bg-white hover:bg-green-500"
                          required
                        />
                        <label
                          htmlFor="terms"
                          className="shadow-inline text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-center"
                        >
                          By submitting this registration form, we affirm that
                          we have read and understood the requirements and
                          mechanics for participation in the 𝐋𝐞𝐚𝐠𝐮𝐞 𝐨𝐟 𝐋𝐞𝐠𝐞𝐧𝐝𝐬
                          Tournament. We agree to comply with all regulations
                          set forth by the organizers.
                        </label>
                      </div>

                      <DialogFooter className="flex justify-center items-center shadow-inline grid-cols-2 lg:gap-72 gap-20 pt-5">
                        <div>
                          <Button
                            type="reset"
                            onClick={() =>
                              setFormData({
                                teamName: "",
                                participants: "",
                                sections: "",
                                repEmail: "",
                                discord: "",
                                lolIGN: "",
                              })
                            }
                            className="hover:bg-red-600 bg-gray-500"
                          >
                            Reset
                          </Button>
                          <Button
                            type="submit"
                            className="hover:bg-yellow-600 bg-gray-500 translate-x-5"
                          >
                            Submit
                          </Button>
                        </div>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </div>
              </Dialog>
            </div>

            <div className="">
              <Drawer>
                <div className="animate-pulse space-x-4 font-extrabold flex flex-col items-center justify-center sm:flex-row sm:items-center">
                  <DrawerTrigger asChild>
                    <button className="font-serif flex justify-between bg-yellow-500 px-20 py-5 rounded-full text-black tracking-wider shadow-x2 hover:bg-white hover:scale-105 duration-500 hover:ring-20 hover:text-black">
                      REQUIREMENTS
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        />
                      </svg>
                    </button>
                  </DrawerTrigger>
                </div>
                <div className="">
                  <DrawerContent className="flex col-span-1 justify-center h-auto">
                    <div className="">
                      <div className="shadow-xl font-extrabold text-4xl lg:text-5xl md:text-4xl sm:text-3xl relative text-center pb-2">
                        REQUIREMENTS
                      </div>
                      <Separator className="bg-gray-200 h-[2px] w-[100%]" />
                      <br />

                      <div className="flex flex-col justify-between sm:max-w-screen">
                        <ol className="shadow-xl flex-col leading-5 tracking-wide text-center text-black text-xl md:2xl lg:text-2xl  ">
                          <li className="pt-2 pb-2 ">
                            ● In addition to meeting the qualification criteria,
                            participating players must adhere to the following
                            requirements:
                          </li>
                          <li className="pt-2 pb-2">
                            ● A team must consist of 5 players and an optional
                            6th substitute member.
                          </li>
                          <li className="pt-2 pb-2">
                            ● Current student ID SY 2023-2024 for every member..
                          </li>
                        </ol>
                      </div>
                    </div>
                  </DrawerContent>
                </div>
              </Drawer>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Card>
      </div>
    </body>
  );
}
