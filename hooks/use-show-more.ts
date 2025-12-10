import { useMemo, useState } from 'react'

export const useShowMore = <T,>(items: T[], initialCount: number) => {
  const [showAll, setShowAll] = useState(false)

  const displayedItems = useMemo(
    () => (showAll ? items : items.slice(0, initialCount)),
    [showAll, items, initialCount]
  )

  const toggleShowAll = () => {
    setShowAll((prev) => !prev)
  }

  const shouldShowButton = items.length > initialCount

  return {
    showAll,
    displayedItems,
    toggleShowAll,
    shouldShowButton,
  }
}

