import { Button, Result } from "antd";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Извините, страница, которую вы посетили, не существует."
      extra={<Button onClick={() => router.push('/')}  type="primary">Назад на главную</Button>}
    />
  );
}
