window.SIDEBAR_ITEMS = {"macro":[["register_histogram","Create a [`Histogram`] and registers to default registry."],["register_histogram_vec","Create a [`HistogramVec`] and registers to default registry."],["register_int_counter","Create an [`IntCounter`] and registers to default registry."],["register_int_counter_vec","Create an [`IntCounterVec`] and registers to default registry."],["register_int_gauge","Create an [`IntGauge`] and registers to default registry."],["register_int_gauge_vec","Create an [`IntGaugeVec`] and registers to default registry."]],"struct":[["Histogram","A [`Metric`] counts individual observations from an event or sample stream in configurable buckets. Similar to a `Summary`, it also provides a sum of observations and an observation count."],["HistogramTimer","Timer to measure and record the duration of an event."],["MetricsPusher","MetricsPusher provides a function to push a list of Metrics to a configurable pushgateway endpoint."]],"type":[["HistogramVec","A [`Collector`] that bundles a set of Histograms that all share the same [`Desc`], but have different values for their variable labels. This is used if you want to count the same thing partitioned by various dimensions (e.g. HTTP request latencies, partitioned by status code and method)."],["IntCounter","The integer version of [`Counter`]. Provides better performance if metric values are all positive integers (natural numbers)."],["IntCounterVec","The integer version of [`CounterVec`]. Provides better performance if metric are all positive integers (natural numbers)."],["IntGauge","The integer version of [`Gauge`]. Provides better performance if metric values are all integers."],["IntGaugeVec","The integer version of [`GaugeVec`]. Provides better performance if metric values are all integers."]]};