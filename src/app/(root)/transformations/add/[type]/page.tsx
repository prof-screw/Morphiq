//based on route/ type of your transformation, your transformation object will 
// pull from transformationtypes and auto fill the title and subtitles
import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";

type SearchParamProps = {
  params: {
    id: string;
    type: TransformationTypeKey;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const AddTransformationTypePage = async ({ params }: SearchParamProps) => {
  const { id, type } = params;
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const transformation = transformationTypes[type];
  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTransformationTypePage;

