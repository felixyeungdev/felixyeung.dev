import arraySort from "array-sort";
import moment from "moment";
import React from "react";

type TimelineData = {
    name: string;
    date: Date;
    url?: string;
    [key: string]: any;
};

interface TimelineProps {
    data: TimelineData[];
    reverse?: boolean;
}

const Timeline = ({ data, reverse = false }: TimelineProps) => {
    const timelineData: TimelineData[] = arraySort(data, "date", { reverse });
    var currentYear: string;

    const allYears = [
        ...new Set(
            timelineData.map((item) => moment(item.date).format("YYYY"))
        ),
    ];

    return (
        <>
            {timelineData.map((item) => {
                const itemYear = moment(item.date).format("YYYY");
                const firstOfKind = itemYear !== currentYear;
                if (firstOfKind) currentYear = itemYear;
                const latest =
                    allYears.indexOf(itemYear) ===
                    (reverse ? 0 : allYears.length - 1);
                return (
                    <React.Fragment key={item.name}>
                        {firstOfKind && (
                            <TimelineLabel label={itemYear} latest={latest} />
                        )}
                        <TimelineItem data={item} />
                    </React.Fragment>
                );
            })}
        </>
    );
};

interface TimelineLabelProps {
    label: string;
    latest?: boolean;
}

const TimelineLabel = ({ label, latest = false }: TimelineLabelProps) => {
    return (
        <div className="border-l-4 ml-4 pl-6 pt-3 border-feli-light flex items-center relative">
            <div
                className={`h-3 w-3 bg-feli rounded-full absolute -left-2 shadow-md ${
                    latest
                        ? "ring-offset-4 ring-offset-feli-lightest ring-4 ring-feli"
                        : "ring-4 ring-feli-lightest"
                }`}
            ></div>
            <h2 className="text-2xl font-semibold">{label}</h2>
        </div>
    );
};

interface TimelineItemProps {
    data: TimelineData;
}

const TimelineItem = ({ data }: TimelineItemProps) => {
    return (
        <div className="border-l-4 ml-4 pl-12 border-feli-light">
            {data.url ? (
                <a
                    className="text-lg"
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {data.name}
                </a>
            ) : (
                <p className="text-lg">{data.name}</p>
            )}
        </div>
    );
};

export default Timeline;
