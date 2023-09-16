"use client";
import Frame from "@/components/frame";
import SkillList from "@/components/skill-list";
import config from "../../config";
import portrait from "@/images/portrait-test.png";
import {
  ModalProvider,
  ModalContainer,
  ModalToggler,
} from "@faceless-ui/modal";
import ContactModal from "@/components/contact-modal";

export default function Home() {
  return (
    <ModalProvider transTime={250}>
      <main>
        <Frame imageSrc={portrait}>
          <div className="min-h-full flex flex-col justify-center">
            <p className="text-2xl">
              Hi, I am a <strong>creative typescript developer</strong>, working
              remotely from Hastings, UK.
            </p>
            <p className="text-lg mt-4">
              I love developing accessible sites and applications that look
              great and perform well. With a flair for solving problems with
              creative solutions.
            </p>
            <p className="mt-4">
              For any enquiries please{" "}
              <ModalToggler
                slug="contact"
                className="font-bold underline hover:opacity-50 duration-300"
              >
                message me.
              </ModalToggler>
            </p>
            <SkillList skills={config.skills} className="mt-10" />
            <p className="text-xs mt-16 block">
              This site is built with Next.js app router.{" "}
              <a
                href="https://github.com/TGriffiths88/tomgriffiths.dev"
                className="font-bold underline hover:opacity-50 duration-300"
                rel="noopener noreferrer"
                target="_blank"
              >
                See the code here.
              </a>
            </p>
          </div>
        </Frame>
      </main>
      <ContactModal />
      <ModalContainer className="h-screen w-screen fixed inset-0 flex items-center px-5 bg-black/30 backdrop-blur-sm" />
    </ModalProvider>
  );
}
