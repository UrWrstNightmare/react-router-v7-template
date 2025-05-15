import { useTranslation } from "react-i18next"

import { useGetHotCoffee } from "../../services/useGetHotCoffee"
import { BaseCard } from "./BaseCard"

export const HotCoffeeCard: React.FC = () => {
  const { t } = useTranslation("example")
  const { data, isLoading, error } = useGetHotCoffee()

  return (
    <BaseCard>
      <h2>{t("hotCoffee.title")}</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          {data.map((hotCoffee) => (
            <div key={hotCoffee.id}>{hotCoffee && <p>{hotCoffee.title}</p>}</div>
          ))}
        </div>
      )}
    </BaseCard>
  )
}
