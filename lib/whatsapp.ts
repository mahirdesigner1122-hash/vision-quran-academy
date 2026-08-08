export const WHATSAPP_NUMBER = "923012711955";

function buildLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const whatsappLinks = {
  general: buildLink(
    "Assalamualaikum, I would like to know more about Vision Quran Academy."
  ),
  freeTrial: buildLink(
    "Assalamualaikum, I would like to book a free trial Quran class."
  ),
  course: (courseName: string) =>
    buildLink(
      `Assalamualaikum, I am interested in learning ${courseName}.`
    ),
  teacher: buildLink(
    "Assalamualaikum, I would like help choosing the right Quran teacher."
  ),
  teacherProfile: (teacherName: string) =>
    buildLink(
      `Assalamualaikum, I would like to talk about learning with ${teacherName}.`
    ),
  learningPlan: (goal: string, level: string, learner: string) =>
    buildLink(
      `Assalamualaikum, I would like to discuss a learning plan. Goal: ${goal}. Learner: ${learner}. Level: ${level}.`
    ),
  faq: buildLink(
    "Assalamualaikum, I have a question about Vision Quran Academy."
  ),
  bare: `https://wa.me/${WHATSAPP_NUMBER}`,
};
