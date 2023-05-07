import {defineConfig} from "sanity"
import {deskTool} from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset: "production",
    title: "Odvjetnički ured Baković",
    apiVersion: "2023-05-07",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: schemas
    }
})

export default config