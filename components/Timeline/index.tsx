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

    return (
        <>
            {timelineData.map((item) => {
                const itemYear = moment(item.date).format("YYYY");
                const firstOfKind = itemYear !== currentYear;
                if (firstOfKind) currentYear = itemYear;
                return (
                    <React.Fragment key={item.name}>
                        {firstOfKind && <TimelineLabel label={itemYear} />}
                        <TimelineItem data={item} />
                    </React.Fragment>
                );
            })}
        </>
    );
};

interface TimelineLabelProps {
    label: string;
}

const TimelineLabel = ({ label }: TimelineLabelProps) => {
    return (
        <div className="border-l-4 ml-4 pl-6 pt-3 border-feli flex items-center relative">
            <div className="h-6 w-6 bg-feli rounded-full absolute -left-3.5 shadow-md"></div>
            <h2 className="text-2xl font-semibold">{label}</h2>
        </div>
    );
};

interface TimelineItemProps {
    data: TimelineData;
}

const TimelineItem = ({ data }: TimelineItemProps) => {
    return (
        <div className="border-l-4 ml-4 pl-12 border-feli">
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
