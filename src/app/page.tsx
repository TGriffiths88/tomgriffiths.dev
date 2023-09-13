import Frame from "@/components/frame";

export default function Home() {
  return (
    <main>
      <Frame imageSrc="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80">
        <div className="h-screen bg-white"></div>
        <div className="h-screen bg-gray-50"></div>
        <div className="h-screen bg-white"></div>
      </Frame>
    </main>
  );
}
