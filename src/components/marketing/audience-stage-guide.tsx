"use client";

import Link from "next/link";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

export type AudienceStageCategory = {
  href: string;
  label: string;
  parentLabel: string;
  roleLabel: string;
};

export type AudienceStageFact = {
  label: string;
  value: string;
};

export type AudienceStageGuideStage = {
  activeCategories: AudienceStageCategory[];
  activeCategoryTotal: number;
  countLine: string;
  facts: AudienceStageFact[];
  href: string;
  id: string;
  slug: string;
  timing: {
    execution: string;
    negotiation: string;
    purchase: string;
  };
  title: string;
};

export type AudienceSaleTypeCard = {
  countLine: string;
  description: string;
  href: string;
  id: "fast" | "consultative";
  sampleFields: string[];
  title: string;
};

type AudienceStageGuideProps = {
  defaultStageSlug?: string;
  locale?: "fa" | "en";
  saleTypes?: AudienceSaleTypeCard[];
  stages?: AudienceStageGuideStage[];
};

const TAB_ID_PREFIX = "audience-stage-tab";
const PANEL_ID_PREFIX = "audience-stage-panel";
const EMPTY_SALE_TYPES: AudienceSaleTypeCard[] = [];
const EMPTY_STAGES: AudienceStageGuideStage[] = [];

function getSafeIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return (index + length) % length;
}

export function AudienceStageGuide({
  defaultStageSlug = "finishing",
  saleTypes,
  stages,
}: AudienceStageGuideProps) {
  const safeSaleTypes = saleTypes ?? EMPTY_SALE_TYPES;
  const safeStages = stages ?? EMPTY_STAGES;
  const defaultIndex = useMemo(() => {
    const requestedIndex = safeStages.findIndex((stage) => stage.slug === defaultStageSlug);
    return requestedIndex >= 0 ? requestedIndex : 0;
  }, [defaultStageSlug, safeStages]);
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [focusedIndex, setFocusedIndex] = useState(defaultIndex);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeStage = safeStages[activeIndex] ?? safeStages[0];

  const focusTab = useCallback(
    (nextIndex: number) => {
      const safeIndex = getSafeIndex(nextIndex, safeStages.length);
      setFocusedIndex(safeIndex);
      window.requestAnimationFrame(() => {
        tabRefs.current[safeIndex]?.focus();
      });
    },
    [safeStages.length],
  );

  const activateTab = useCallback((nextIndex: number) => {
    const safeIndex = getSafeIndex(nextIndex, safeStages.length);
    setActiveIndex(safeIndex);
    setFocusedIndex(safeIndex);
  }, [safeStages.length]);

  const handleTabKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
        event.preventDefault();
        focusTab(index + 1);
        return;
      }

      if (event.key === "ArrowUp" || event.key === "ArrowRight") {
        event.preventDefault();
        focusTab(index - 1);
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        focusTab(0);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        focusTab(safeStages.length - 1);
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateTab(index);
      }
    },
    [activateTab, focusTab, safeStages.length],
  );

  if (!activeStage) {
    return null;
  }

  return (
    <div className="audience-stage-guide">
      <div className="audience-sale-types" aria-label="نوع فروش">
        {safeSaleTypes.map((saleType) => (
          <article className="audience-sale-type-card" key={saleType.id}>
            <h3 className="audience-sale-type-card__title">
              <span>{saleType.title}</span>
              <span className="audience-sale-type-card__count">
                {" "}
                - {saleType.countLine}
              </span>
            </h3>
            <p className="audience-sale-type-card__description">{saleType.description}</p>

            <div className="audience-sale-type-card__sample-title">
              برخی از محصولات و خدمات این دسته
            </div>
            <div className="audience-sale-type-card__samples" aria-label="نمونه زمینه‌های کاری">
              {saleType.sampleFields.slice(0, 4).map((field) => (
                <span className="audience-sale-type-card__chip" key={field}>
                  {field}
                </span>
              ))}
            </div>

            <Link className="audience-stage-link" href={saleType.href}>
              توضیحات بیشتر
              <span aria-hidden="true">←</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="audience-stage-layout">
        <div
          aria-label="مراحل چرخه ساخت"
          aria-orientation="vertical"
          className="audience-stage-tabs"
          role="tablist"
        >
          {safeStages.map((stage, index) => {
            const isActive = index === activeIndex;
            const isFocusable = index === focusedIndex;

            return (
              <button
                aria-controls={`${PANEL_ID_PREFIX}-${stage.id}`}
                aria-selected={isActive}
                className="audience-stage-tab"
                id={`${TAB_ID_PREFIX}-${stage.id}`}
                key={stage.id}
                onClick={() => activateTab(index)}
                onFocus={() => setFocusedIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                role="tab"
                tabIndex={isFocusable ? 0 : -1}
                type="button"
              >
                <span className="audience-stage-tab__stopper" aria-hidden="true" />
                <span className="audience-stage-tab__content">
                  <span className="audience-stage-tab__title-row">
                    <span className="audience-stage-tab__title">{stage.title}</span>
                    <span className="audience-stage-tab__count"> - {stage.countLine}</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="audience-stage-panels">
          {safeStages.map((stage, index) => {
            const isActive = index === activeIndex;
            const visibleCategories = stage.activeCategories.slice(0, 6);
            const hiddenCategoryCount = Math.max(
              stage.activeCategoryTotal - visibleCategories.length,
              0,
            );

            return (
              <article
                aria-labelledby={`${TAB_ID_PREFIX}-${stage.id}`}
                className="audience-stage-detail"
                hidden={!isActive}
                id={`${PANEL_ID_PREFIX}-${stage.id}`}
                key={stage.id}
                role="tabpanel"
                tabIndex={0}
              >
                <div className="audience-stage-detail__header">
                  <h3 className="audience-stage-detail__title">
                    <span>{stage.title}</span>
                    <span className="audience-stage-detail__count">
                      {" "}
                      - {stage.countLine}
                    </span>
                  </h3>
                </div>

                <dl className="audience-stage-facts" aria-label="خلاصه مرحله">
                  {stage.facts.map((fact) => (
                    <div className="audience-stage-fact" key={`${stage.id}-${fact.label}`}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <section
                  aria-labelledby={`audience-stage-categories-${stage.id}`}
                  className="audience-stage-block"
                >
                  <div className="audience-stage-block__heading" id={`audience-stage-categories-${stage.id}`}>
                    زمینه‌های کاری فعال در این مرحله
                  </div>
                  <div className="audience-stage-categories">
                    {visibleCategories.map((category) => (
                      <Link
                        className="audience-stage-category"
                        href={category.href}
                        key={`${stage.id}-${category.href}`}
                      >
                        <span className="audience-stage-category__label">{category.label}</span>
                        <span className="audience-stage-category__meta">
                          {category.roleLabel.split(/(\/)/).map((part, partIndex) =>
                            part === "/" ? (
                              <span className="audience-stage-category__meta-separator" key={`${category.href}-separator-${partIndex}`}>
                                {part}
                              </span>
                            ) : (
                              part
                            ),
                          )}
                        </span>
                      </Link>
                    ))}
                    <Link className="audience-stage-category audience-stage-category--more" href={stage.href}>
                      <span className="audience-stage-category__label">
                        مشاهده بیشتر
                        {hiddenCategoryCount > 0 ? (
                          <> ({hiddenCategoryCount.toLocaleString("fa-IR")} مورد دیگر)</>
                        ) : null}
                      </span>
                    </Link>
                  </div>
                </section>

                <Link className="audience-stage-link audience-stage-link--detail" href={stage.href}>
                  مشاهده صفحه کامل مرحله
                  <span aria-hidden="true">←</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
