import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="flex justify-center w-[350px]">
        <CardHeader>
          <CardTitle>Create CodingWaves Boilerplate</CardTitle>
          <CardDescription className="flex justify-center">Deploy your new project in one-click.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
